import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyt1224qi.css';
import '../../css/c/cgwb7wb5t.css';
import '../../css/p/pe8lg5bif.css';
import '../../css/w/w2nbmsbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dyt1224qi"/><path class="cgwb7wb5t"/><path class="pe8lg5bif"/><path class="w2nbmsbdl"/></g>`,
		"fallback": "tdesign:undertake-hold-up",
	});
}

export default Component;
