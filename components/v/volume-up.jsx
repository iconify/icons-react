import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4cqtxb4q.css';
import '../../css/r/rrw1wrbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4cqtxb4q"/><path class="rrw1wrbfd"/>`,
		"fallback": "prime:volume-up",
	});
}

export default Component;
