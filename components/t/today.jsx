import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqh5eqr2x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqh5eqr2x"/>`,
		"fallback": "f7:today",
	});
}

export default Component;
