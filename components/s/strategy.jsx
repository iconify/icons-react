import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/go2hddcxj.css';
import '../../css/i/i5wjkl-nm.css';

const viewBox = {"width":23,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="go2hddcxj"/><path class="i5wjkl-nm"/></g>`,
		"fallback": "et:strategy",
	});
}

export default Component;
