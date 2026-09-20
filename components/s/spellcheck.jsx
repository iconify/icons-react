import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_1m5nb6h.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_1m5nb6h"/>`,
		"fallback": "picon:spellcheck",
	});
}

export default Component;
