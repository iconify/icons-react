import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gros5otib.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gros5otib"/>`,
		"fallback": "fluent-mdl2:screen-cast",
	});
}

export default Component;
