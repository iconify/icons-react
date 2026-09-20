import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo62x3btp.css';
import '../../css/g/g8ck1ubmr.css';
import '../../css/g/gktvaxxcy.css';

const viewBox = {"width":68,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo62x3btp"/><path class="g8ck1ubmr"/><path class="gktvaxxcy"/>`,
		"fallback": "octicon:lockup-github-16",
	});
}

export default Component;
