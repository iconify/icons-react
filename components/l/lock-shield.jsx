import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvxjmchgi.css';
import '../../css/m/mhs5utjyz.css';
import '../../css/r/rn1lnjbue.css';
import '../../css/p/p8f18sbqf.css';
import '../../css/b/bhqb71rfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dvxjmchgi"/><path class="mhs5utjyz"/><path class="rn1lnjbue"/><path class="p8f18sbqf"/><path class="bhqb71rfn"/></g>`,
		"fallback": "streamline-cyber-color:lock-shield",
	});
}

export default Component;
