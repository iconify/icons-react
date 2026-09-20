import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxh981b4t.css';
import '../../css/b/b0pdjpqyn.css';
import '../../css/n/njrclqbon.css';
import '../../css/s/st6d4ybmj.css';
import '../../css/t/t2l26ybmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxh981b4t"/><path class="b0pdjpqyn"/><path class="njrclqbon"/><path class="st6d4ybmj"/><path class="t2l26ybmm"/></g>`,
		"fallback": "streamline-cyber-color:signal-square",
	});
}

export default Component;
