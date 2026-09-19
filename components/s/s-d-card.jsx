import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzsygrokx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzsygrokx"/>`,
		"fallback": "fluent-mdl2:s-d-card",
	});
}

export default Component;
