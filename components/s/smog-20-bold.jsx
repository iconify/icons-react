import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/effq2ibhl.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="effq2ibhl"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:smog-20-bold",
	});
}

export default Component;
