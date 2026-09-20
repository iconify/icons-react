import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpz2iy6dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpz2iy6dt"/>`,
		"fallback": "mdi:number-7",
	});
}

export default Component;
