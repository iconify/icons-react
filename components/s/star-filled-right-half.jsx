import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf2qh7htv.css';
import '../../css/w/w2alchb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path fill-opacity="0" class="jf2qh7htv"><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/></path><path stroke-dashoffset="36" class="w2alchb6j"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"/></path>`,
		"fallback": "line-md:star-filled-right-half",
	});
}

export default Component;
