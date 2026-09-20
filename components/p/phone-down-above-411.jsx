import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp-g6p_te.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp-g6p_te"/>`,
		"fallback": "pinhead:phone-down-above-411",
	});
}

export default Component;
