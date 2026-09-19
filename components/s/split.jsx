import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrj8e_b1z.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrj8e_b1z"/>`,
		"fallback": "fluent-mdl2:split",
	});
}

export default Component;
