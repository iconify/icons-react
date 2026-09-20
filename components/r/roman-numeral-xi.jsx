import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh-ubxb6b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh-ubxb6b"/>`,
		"fallback": "pinhead:roman-numeral-xi",
	});
}

export default Component;
