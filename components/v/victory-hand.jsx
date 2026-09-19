import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i__int0_t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i__int0_t"/>`,
		"fallback": "fluent-emoji-high-contrast:victory-hand",
	});
}

export default Component;
