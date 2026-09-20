import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkazv9b8k.css';
import '../../css/g/gkd-s96ca.css';
import '../../css/k/k7imll63p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkazv9b8k"/><path class="gkd-s96ca"/><path class="k7imll63p"/>`,
		"fallback": "thesvg-color:unocss",
	});
}

export default Component;
