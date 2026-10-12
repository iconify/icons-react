import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-kov0b6s.css';
import '../../css/p/p2a4bjfsv.css';
import '../../css/w/wgvvg0b4e.css';
import '../../css/b/b_qudiiuj.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-kov0b6s"/><path class="p2a4bjfsv"/><path class="wgvvg0b4e"/><path class="b_qudiiuj"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:smart-meter-check-20-bold",
	});
}

export default Component;
