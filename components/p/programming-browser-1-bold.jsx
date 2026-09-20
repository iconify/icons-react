import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdn0e2t3u.css';
import '../../css/p/pewfbnuxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdn0e2t3u"/><path class="pewfbnuxk"/>`,
		"fallback": "streamline-ultimate:programming-browser-1-bold",
	});
}

export default Component;
