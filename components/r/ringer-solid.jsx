import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td8ziyyjl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td8ziyyjl"/>`,
		"fallback": "fluent-mdl2:ringer-solid",
	});
}

export default Component;
