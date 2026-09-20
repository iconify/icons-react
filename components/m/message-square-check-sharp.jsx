import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq5hl4bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq5hl4bco"/>`,
		"fallback": "keyline-icons:message-square-check-sharp",
	});
}

export default Component;
