import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysa93ccjm.css';
import '../../css/z/zj49idy7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysa93ccjm"/><path class="zj49idy7n"/>`,
		"fallback": "octicon:skip-24",
	});
}

export default Component;
