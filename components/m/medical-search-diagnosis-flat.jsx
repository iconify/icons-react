import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i27vaob_o.css';
import '../../css/f/f0bgt7bxk.css';
import '../../css/l/ls1qmgb_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i27vaob_o"/><path clip-rule="evenodd" class="f0bgt7bxk"/><path class="ls1qmgb_m"/></g>`,
		"fallback": "streamline-color:medical-search-diagnosis-flat",
	});
}

export default Component;
