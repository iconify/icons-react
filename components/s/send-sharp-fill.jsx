import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukq-o_bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukq-o_bfl"/>`,
		"fallback": "keyline-icons:send-sharp-fill",
	});
}

export default Component;
