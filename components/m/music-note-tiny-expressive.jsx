import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyzav_krx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyzav_krx"/>`,
		"fallback": "nrk:music-note-tiny-expressive",
	});
}

export default Component;
