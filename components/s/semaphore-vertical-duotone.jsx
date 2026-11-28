import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihgmx3brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihgmx3brz primary"/>`,
		"fallback": "iconaut:semaphore-vertical-duotone",
	});
}

export default Component;
