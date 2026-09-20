import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tb91skb8m.css';
import '../../css/j/j2ptblbrz.css';
import '../../css/m/mkw0-ac3d.css';
import '../../css/a/ao8tt2btf.css';
import '../../css/k/kbdpyz3jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tb91skb8m"/><path class="j2ptblbrz"/><path class="mkw0-ac3d"/><path class="ao8tt2btf"/><path class="kbdpyz3jj"/></g>`,
		"fallback": "streamline-cyber-color:view-2",
	});
}

export default Component;
