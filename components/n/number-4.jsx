import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4zqb_bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4zqb_bwk"/>`,
		"fallback": "mdi:number-4",
	});
}

export default Component;
