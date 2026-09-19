import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv8i4385h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pv8i4385h"/>`,
		"fallback": "fluent-emoji-high-contrast:radio-button",
	});
}

export default Component;
