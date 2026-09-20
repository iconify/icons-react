import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_f0wxssg.css';
import '../../css/k/kdy6dcwqy.css';
import '../../css/q/qz2cgcavq.css';
import '../../css/e/ekkf2kb6w.css';
import '../../css/y/yboe5bc6p.css';
import '../../css/w/w4wiagk1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_f0wxssg"/><path class="kdy6dcwqy"/><path class="qz2cgcavq"/><path class="ekkf2kb6w"/><path class="yboe5bc6p"/><path class="w4wiagk1x"/></g>`,
		"fallback": "streamline-cyber-color:stamp-2",
	});
}

export default Component;
