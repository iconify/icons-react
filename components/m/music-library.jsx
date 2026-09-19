import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc6c15taa.css';
import '../../css/p/pnnjfds4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc6c15taa"/><path class="pnnjfds4j"/>`,
		"fallback": "boxicons:music-library",
	});
}

export default Component;
