import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncg24tb6p.css';
import '../../css/w/w4z9bpbgj.css';
import '../../css/c/cak1_0e_l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncg24tb6p"/><path class="w4z9bpbgj"/><path class="cak1_0e_l"/>`,
		"fallback": "streamline-pixel:interface-essential-lock-door-out",
	});
}

export default Component;
