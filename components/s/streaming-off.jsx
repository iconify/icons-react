import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzjwq8z-r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzjwq8z-r"/>`,
		"fallback": "fluent-mdl2:streaming-off",
	});
}

export default Component;
