import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exj8ttbwn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exj8ttbwn"/>`,
		"fallback": "fluent-mdl2:skip-back-10",
	});
}

export default Component;
