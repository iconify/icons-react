import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt5pd106e.css';
import '../../css/h/hpikg810o.css';
import '../../css/j/jlthyywjs.css';
import '../../css/x/x19qmcbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rt5pd106e"/><path class="hpikg810o"/><path class="jlthyywjs"/><path class="x19qmcbwy"/></g>`,
		"fallback": "streamline-ultimate-color:smiley-smile-1",
	});
}

export default Component;
