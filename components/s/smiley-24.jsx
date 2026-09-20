import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-wc5tbnn.css';
import '../../css/z/zj49idy7n.css';
import '../../css/p/psb8q1--l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-wc5tbnn"/><path class="zj49idy7n"/><path class="psb8q1--l"/>`,
		"fallback": "octicon:smiley-24",
	});
}

export default Component;
