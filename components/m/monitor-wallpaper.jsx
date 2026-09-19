import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_nerh3_q.css';
import '../../css/r/rdl-cintb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_nerh3_q"/><path class="rdl-cintb"/>`,
		"fallback": "boxicons:monitor-wallpaper",
	});
}

export default Component;
