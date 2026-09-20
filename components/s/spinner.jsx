import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihrl0fbrp.css';
import '../../css/l/l31-rpb2b.css';
import '../../css/f/f7el6mb9v.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihrl0fbrp"/><circle class="l31-rpb2b"/><path class="f7el6mb9v"/>`,
		"fallback": "lineicons:spinner",
	});
}

export default Component;
