import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrbquor0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrbquor0a"/>`,
		"fallback": "mdi:number-seven-circle-outline",
	});
}

export default Component;
