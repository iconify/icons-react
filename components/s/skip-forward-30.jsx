import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3do9iboq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3do9iboq"/>`,
		"fallback": "fluent-mdl2:skip-forward-30",
	});
}

export default Component;
