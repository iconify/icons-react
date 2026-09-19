import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjf09_bca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjf09_bca"/>`,
		"fallback": "fluent-emoji-high-contrast:trade-mark",
	});
}

export default Component;
