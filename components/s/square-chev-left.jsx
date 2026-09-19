import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiksrrvez.css';
import '../../css/x/xwlsu8bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiksrrvez"/><path class="xwlsu8bmp"/>`,
		"fallback": "circum:square-chev-left",
	});
}

export default Component;
