import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-sogubpk.css';
import '../../css/k/kob3fcbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-sogubpk"/><path class="kob3fcbmh"/>`,
		"fallback": "solar:minimize-bold",
	});
}

export default Component;
