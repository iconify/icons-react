import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8kduccib.css';
import '../../css/j/jr633_uxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8kduccib"/><path class="jr633_uxg"/>`,
		"fallback": "token:movr",
	});
}

export default Component;
