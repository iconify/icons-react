import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/horqr3d3u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="horqr3d3u"/>`,
		"fallback": "fluent-mdl2:semibold-weight",
	});
}

export default Component;
