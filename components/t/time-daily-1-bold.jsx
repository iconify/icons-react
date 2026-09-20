import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb5p6obzi.css';
import '../../css/o/ow-wen-ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb5p6obzi"/><path class="ow-wen-ya"/>`,
		"fallback": "streamline-ultimate:time-daily-1-bold",
	});
}

export default Component;
