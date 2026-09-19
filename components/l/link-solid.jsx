import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqf92tbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqf92tbkv"/>`,
		"fallback": "flowbite:link-solid",
	});
}

export default Component;
