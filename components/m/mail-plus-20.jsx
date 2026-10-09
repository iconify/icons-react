import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewbuvvbog.css';
import '../../css/z/zh3_rg95y.css';
import '../../css/j/jriqj3vpn.css';
import '../../css/a/ayddllhhf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewbuvvbog"/><path class="zh3_rg95y"/><path class="jriqj3vpn"/><path class="ayddllhhf"/>`,
		"fallback": "energy-icons:mail-plus-20",
	});
}

export default Component;
