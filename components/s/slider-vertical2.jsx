import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcjsmgb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcjsmgb_t"/>`,
		"fallback": "reicon:slider-vertical2",
	});
}

export default Component;
