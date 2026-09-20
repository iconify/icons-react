import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igi0b0bse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igi0b0bse"/>`,
		"fallback": "ooui:italic-e",
	});
}

export default Component;
