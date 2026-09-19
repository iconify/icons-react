import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl3vdka2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl3vdka2j"/>`,
		"fallback": "boxicons:turn-up",
	});
}

export default Component;
