import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hej_0ybuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hej_0ybuu"/>`,
		"fallback": "mage:shield-question-mark-fill",
	});
}

export default Component;
