import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gehfu_7md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gehfu_7md primary"/>`,
		"fallback": "iconaut:semaphore-horizontal-duotone",
	});
}

export default Component;
