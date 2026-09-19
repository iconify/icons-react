import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxgthgt6f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxgthgt6f"/>`,
		"fallback": "f7:speaker",
	});
}

export default Component;
