import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifk465b8w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifk465b8w"/>`,
		"fallback": "pinhead:roman-numeral-xx",
	});
}

export default Component;
