import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huaseya6u.css';
import '../../css/v/va_wj3nkc.css';
import '../../css/l/l05rrsb8g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huaseya6u"/><path class="va_wj3nkc"/><path class="l05rrsb8g"/>`,
		"fallback": "energy-icons:liquid-hydrogen-20-bold",
	});
}

export default Component;
