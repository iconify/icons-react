import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkuh8za8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkuh8za8t"/>`,
		"fallback": "uil:medical-square",
	});
}

export default Component;
