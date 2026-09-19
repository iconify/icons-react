import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhbvqjyxk.css';
import '../../css/j/j64dr1bxs.css';
import '../../css/g/gtn46m-jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bhbvqjyxk"/><rect class="j64dr1bxs"/><rect class="gtn46m-jg"/>`,
		"fallback": "boxicons:layout-filled",
	});
}

export default Component;
