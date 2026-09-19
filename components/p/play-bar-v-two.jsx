import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t67x14b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t67x14b-m"/>`,
		"fallback": "cbi:play-bar-v-two",
	});
}

export default Component;
