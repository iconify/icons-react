import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjfjtsb2g.css';
import '../../css/v/v3wew2ztk.css';
import '../../css/j/jm4gr77xf.css';
import '../../css/y/y6wxknbvs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hjfjtsb2g"/><path class="v3wew2ztk"/><path class="jm4gr77xf"/><path class="y6wxknbvs"/></g>`,
		"fallback": "streamline-color:paintbrush-2",
	});
}

export default Component;
