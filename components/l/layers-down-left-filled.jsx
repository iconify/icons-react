import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsvcw96ah.css';
import '../../css/y/yal5mhbcs.css';
import '../../css/k/kbk3tibjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsvcw96ah"/><path class="yal5mhbcs"/><path class="kbk3tibjh"/>`,
		"fallback": "boxicons:layers-down-left-filled",
	});
}

export default Component;
