import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe94j3tcg.css';
import '../../css/u/u-hablz3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe94j3tcg"/><path class="u-hablz3s"/>`,
		"fallback": "carbon:succession",
	});
}

export default Component;
