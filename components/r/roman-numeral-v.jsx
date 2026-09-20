import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tua0_-b1d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tua0_-b1d"/>`,
		"fallback": "pinhead:roman-numeral-v",
	});
}

export default Component;
