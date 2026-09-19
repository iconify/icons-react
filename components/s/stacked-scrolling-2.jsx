import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhj7_6cck.css';
import '../../css/d/dc9hw5g_e.css';
import '../../css/c/c9digbcde.css';
import '../../css/x/xajsqxb-e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhj7_6cck"/><path class="dc9hw5g_e"/><path class="c9digbcde"/><path class="xajsqxb-e"/>`,
		"fallback": "carbon:stacked-scrolling-2",
	});
}

export default Component;
