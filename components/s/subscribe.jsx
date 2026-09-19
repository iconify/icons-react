import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn3v4sbxf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn3v4sbxf"/>`,
		"fallback": "fluent-mdl2:subscribe",
	});
}

export default Component;
