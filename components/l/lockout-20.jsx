import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx6vej9mh.css';
import '../../css/q/qjh6c2bbs.css';
import '../../css/x/xhkmldn9e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx6vej9mh"/><path class="qjh6c2bbs"/><path class="xhkmldn9e"/>`,
		"fallback": "energy-icons:lockout-20",
	});
}

export default Component;
