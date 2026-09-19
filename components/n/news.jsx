import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1j4ut41w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1j4ut41w"/>`,
		"fallback": "fluent-mdl2:news",
	});
}

export default Component;
