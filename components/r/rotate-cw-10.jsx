import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_n7dobql.css';
import '../../css/n/nzlfk-b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_n7dobql"/><path class="nzlfk-b_q"/>`,
		"fallback": "boxicons:rotate-cw-10",
	});
}

export default Component;
