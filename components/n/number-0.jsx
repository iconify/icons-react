import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbsqw0x7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbsqw0x7x"/>`,
		"fallback": "tabler:number-0",
	});
}

export default Component;
