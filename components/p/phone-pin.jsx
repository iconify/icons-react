import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5a1_3ush.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5a1_3ush"/>`,
		"fallback": "tabler:phone-pin",
	});
}

export default Component;
