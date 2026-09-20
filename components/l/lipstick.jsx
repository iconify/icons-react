import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuglmubmf.css';
import '../../css/q/q5z4b0cip.css';
import '../../css/r/r6_xsob4w.css';
import '../../css/j/jd3e4g0ah.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yuglmubmf"/><path class="q5z4b0cip"/><path class="r6_xsob4w"/><path class="jd3e4g0ah"/></g>`,
		"fallback": "streamline-color:lipstick",
	});
}

export default Component;
