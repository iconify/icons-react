import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7hm2xayt.css';
import '../../css/x/x0s-9cb3t.css';
import '../../css/c/ch6422bmt.css';
import '../../css/y/yh1kbryel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a7hm2xayt"/><path class="x0s-9cb3t"/><path class="ch6422bmt"/><path class="yh1kbryel"/></g>`,
		"fallback": "streamline-cyber-color:smiley-frown",
	});
}

export default Component;
