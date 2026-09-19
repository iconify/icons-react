import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh1r_abuc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh1r_abuc"/>`,
		"fallback": "fluent-emoji-high-contrast:two-hearts",
	});
}

export default Component;
