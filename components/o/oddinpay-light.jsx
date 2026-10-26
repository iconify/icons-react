import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e910xyhfw.css';

const viewBox = {"width":35,"height":35};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e910xyhfw"/>`,
		"fallback": "thesvg-color:oddinpay-light",
	});
}

export default Component;
