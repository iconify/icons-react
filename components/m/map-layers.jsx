import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hleg9kbqi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hleg9kbqi"/>`,
		"fallback": "fluent-mdl2:map-layers",
	});
}

export default Component;
