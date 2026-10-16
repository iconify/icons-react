import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnbe30brb.css';

const viewBox = {"width":383,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnbe30brb"/>`,
		"fallback": "thesvg-color:ledger",
	});
}

export default Component;
