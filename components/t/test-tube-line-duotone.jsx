import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dsskz8slx.css';
import '../../css/u/uk6bxm1hn.css';
import '../../css/n/nw_01ubup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dsskz8slx"/><path class="uk6bxm1hn"/><path class="nw_01ubup"/></g>`,
		"fallback": "solar:test-tube-line-duotone",
	});
}

export default Component;
