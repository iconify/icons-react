import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewbuvvbog.css';
import '../../css/z/zh3_rg95y.css';
import '../../css/j/j7vic2sbg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewbuvvbog"/><path class="zh3_rg95y"/><path class="j7vic2sbg"/>`,
		"fallback": "energy-icons:mail-check-20",
	});
}

export default Component;
