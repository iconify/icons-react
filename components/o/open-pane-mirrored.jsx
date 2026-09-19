import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eipyzp1hr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eipyzp1hr"/>`,
		"fallback": "fluent-mdl2:open-pane-mirrored",
	});
}

export default Component;
