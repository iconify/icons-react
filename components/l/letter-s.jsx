import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr5sb_z4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr5sb_z4p"/>`,
		"fallback": "mynaui:letter-s",
	});
}

export default Component;
