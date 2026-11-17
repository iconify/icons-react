import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zmqvefb4b.css';
import '../../css/f/f8pik0dtj.css';
import '../../css/n/n-4oupbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="zmqvefb4b"/><path class="f8pik0dtj"/><path class="n-4oupbpd"/></g>`,
		"fallback": "matita:star-off",
	});
}

export default Component;
