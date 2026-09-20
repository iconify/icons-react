import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehzb5827t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehzb5827t"/>`,
		"fallback": "ri:swap-3-line",
	});
}

export default Component;
