import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmdy4volz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmdy4volz"/>`,
		"fallback": "fluent-mdl2:shop-server",
	});
}

export default Component;
