import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt5pd106e.css';
import '../../css/h/hpikg810o.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/q/qsqpdnj4m.css';
import '../../css/q/qf6l0_bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rt5pd106e"/><path class="hpikg810o"/><path class="x19qmcbwy"/><path class="qsqpdnj4m"/><path class="qf6l0_bxg"/></g>`,
		"fallback": "streamline-ultimate-color:smiley-prank",
	});
}

export default Component;
