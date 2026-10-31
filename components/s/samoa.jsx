import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdftbpbaj.css';
import '../../css/j/j4lu8gyen.css';
import '../../css/q/qmrxzvmyf.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdftbpbaj"/><path class="j4lu8gyen"/><path class="qmrxzvmyf"/>`,
		"fallback": "tabler-flags:samoa",
	});
}

export default Component;
