import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6hkc5b2j.css';
import '../../css/o/op2gjqblh.css';
import '../../css/x/xmd1k6ysb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6hkc5b2j"/><path class="op2gjqblh"/><path class="xmd1k6ysb"/>`,
		"fallback": "devicon:raspberrypi",
	});
}

export default Component;
