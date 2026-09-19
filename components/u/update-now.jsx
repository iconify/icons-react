import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfqul596w.css';
import '../../css/a/ao5bk4bro.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfqul596w"/><path class="ao5bk4bro"/>`,
		"fallback": "carbon:update-now",
	});
}

export default Component;
