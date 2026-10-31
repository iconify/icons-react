import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ctank51on.css';
import '../../css/j/jwu8oqnzy.css';
import '../../css/f/f1_e7q3dc.css';
import '../../css/t/th1qtmb2o.css';
import '../../css/r/rsm-pzbmt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ctank51on"/><path class="jwu8oqnzy"/><path class="f1_e7q3dc"/><path class="th1qtmb2o"/><path class="rsm-pzbmt"/></g>`,
		"fallback": "streamline-kameleon-color:perfume-pop",
	});
}

export default Component;
