import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhbvqjyxk.css';
import '../../css/j/j64dr1bxs.css';
import '../../css/b/bba041bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bhbvqjyxk"/><rect class="j64dr1bxs"/><path class="bba041bgc"/>`,
		"fallback": "boxicons:layout-minus-filled",
	});
}

export default Component;
