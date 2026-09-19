import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh_10ccvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh_10ccvq"/>`,
		"fallback": "boxicons:music-filled",
	});
}

export default Component;
