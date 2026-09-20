import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/y/ypl1pmbdy.css';
import '../../css/j/jgjjp7t-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="zv6cqnbnp"/><path class="ypl1pmbdy"/><rect class="jgjjp7t-j"/></g>`,
		"fallback": "majesticons:user-box-line",
	});
}

export default Component;
