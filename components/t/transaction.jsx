import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-id4q7lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-id4q7lk"/>`,
		"fallback": "uil:transaction",
	});
}

export default Component;
