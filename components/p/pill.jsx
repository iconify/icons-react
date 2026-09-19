import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px9_d10ir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px9_d10ir"/>`,
		"fallback": "fluent-emoji-high-contrast:pill",
	});
}

export default Component;
