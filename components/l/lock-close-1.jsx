import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0xy8lb3x.css';
import '../../css/m/mtlp8goyw.css';
import '../../css/z/zmexo7e_i.css';
import '../../css/r/rye58inxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0xy8lb3x"/><path class="mtlp8goyw"/><path class="zmexo7e_i"/><path class="rye58inxk"/></g>`,
		"fallback": "streamline-cyber-color:lock-close-1",
	});
}

export default Component;
