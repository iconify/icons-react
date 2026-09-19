import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxni16bno.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxni16bno"/>`,
		"fallback": "fluent-mdl2:new-folder",
	});
}

export default Component;
