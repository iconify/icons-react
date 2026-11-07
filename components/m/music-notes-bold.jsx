import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny2z_jjno.css';
import '../../css/m/m33dd1b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny2z_jjno"/><path class="m33dd1b0b"/>`,
		"fallback": "solar:music-notes-bold",
	});
}

export default Component;
