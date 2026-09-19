import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flz1i8pyj.css';
import '../../css/e/evvf81f4r.css';
import '../../css/m/mwwapo85f.css';
import '../../css/r/rd_no8yio.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flz1i8pyj"/><path class="evvf81f4r"/><path class="mwwapo85f"/><circle class="rd_no8yio"/></g>`,
		"fallback": "icon-park:shrimp",
	});
}

export default Component;
