import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhbvqjyxk.css';
import '../../css/g/gyghflb6y.css';
import '../../css/j/j64dr1bxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bhbvqjyxk"/><path class="gyghflb6y"/><rect class="j64dr1bxs"/>`,
		"fallback": "boxicons:layout-search-filled",
	});
}

export default Component;
