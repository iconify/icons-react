import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ra11bdp.css';
import '../../css/z/zj49idy7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5ra11bdp"/><path class="zj49idy7n"/>`,
		"fallback": "octicon:issue-closed-24",
	});
}

export default Component;
