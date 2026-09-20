import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb39_n0xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lb39_n0xv"/>`,
		"fallback": "nrk:latest-news",
	});
}

export default Component;
