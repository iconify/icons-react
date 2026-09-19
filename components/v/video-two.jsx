import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qzkhf9znl.css';
import '../../css/w/wyl_g7a6x.css';
import '../../css/q/qbk8l2bvl.css';
import '../../css/o/oboih_b9o.css';
import '../../css/n/nouq6rbjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qzkhf9znl"/><path class="wyl_g7a6x"/><path class="qbk8l2bvl"/><path class="oboih_b9o"/><path class="nouq6rbjk"/></g>`,
		"fallback": "icon-park:video-two",
	});
}

export default Component;
