import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adkfwb6mj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adkfwb6mj"/>`,
		"fallback": "fluent-mdl2:p-y",
	});
}

export default Component;
