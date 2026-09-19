import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y3_mm4brf.css';
import '../../css/c/cyx181h_x.css';
import '../../css/r/r8nqnlg4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="y3_mm4brf"/><path class="cyx181h_x"/><path class="r8nqnlg4f"/></g>`,
		"fallback": "icon-park:to-bottom",
	});
}

export default Component;
