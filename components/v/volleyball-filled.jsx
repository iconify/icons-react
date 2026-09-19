import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz3hkhzdn.css';
import '../../css/l/l_7dq0ahs.css';
import '../../css/p/pun1k1brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz3hkhzdn"/><path class="l_7dq0ahs"/><path class="pun1k1brn"/>`,
		"fallback": "boxicons:volleyball-filled",
	});
}

export default Component;
