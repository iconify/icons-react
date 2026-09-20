import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxh981b4t.css';
import '../../css/j/j2709-b7j.css';
import '../../css/x/x21do37cg.css';
import '../../css/m/m41pybbrj.css';
import '../../css/p/pn0r5phbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxh981b4t"/><path class="j2709-b7j"/><path class="x21do37cg"/><path class="m41pybbrj"/><path class="pn0r5phbp"/></g>`,
		"fallback": "streamline-cyber-color:video-player-1",
	});
}

export default Component;
