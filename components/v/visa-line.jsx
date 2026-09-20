import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko-91ibce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko-91ibce"/>`,
		"fallback": "ri:visa-line",
	});
}

export default Component;
