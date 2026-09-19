import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krz0u-imm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krz0u-imm"/>`,
		"fallback": "circum:no-waiting-sign",
	});
}

export default Component;
