import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v30afmbdi.css';
import '../../css/i/i2xbnvbcj.css';
import '../../css/g/g-44jfbjw.css';
import '../../css/r/r-pwdt-3l.css';
import '../../css/f/fs7py2b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v30afmbdi"/><path class="i2xbnvbcj"/><path class="g-44jfbjw"/><path class="r-pwdt-3l"/><path class="fs7py2b0k"/></g>`,
		"fallback": "streamline-ultimate-color:optimization-graph-line",
	});
}

export default Component;
