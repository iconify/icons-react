import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_c6_8sjt.css';
import '../../css/s/s7dk4dcvy.css';
import '../../css/a/avfsq0dqv.css';
import '../../css/x/x21dsqgmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_c6_8sjt"/><path class="s7dk4dcvy"/><path class="avfsq0dqv"/><path class="x21dsqgmr"/>`,
		"fallback": "token:sail",
	});
}

export default Component;
