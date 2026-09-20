import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oe-m7obwx.css';
import '../../css/c/c70tr2bcp.css';
import '../../css/y/ys-cob_hs.css';
import '../../css/p/pkiz8tbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oe-m7obwx"/><path class="c70tr2bcp"/><path class="ys-cob_hs"/><path class="pkiz8tbah"/></g>`,
		"fallback": "streamline-ultimate-color:light-mode-bright-dark",
	});
}

export default Component;
