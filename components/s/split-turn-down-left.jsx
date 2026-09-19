import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/ptfd72bge.css';
import '../../css/w/wwdcnvbcw.css';
import '../../css/o/oqzndonzj.css';
import '../../css/e/e_6rg96in.css';
import '../../css/c/cv17n6biu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ptfd72bge"/><circle transform="rotate(-90 37 8.944)" class="wwdcnvbcw"/><path class="oqzndonzj"/><path class="e_6rg96in"/><path class="cv17n6biu"/></g>`,
		"fallback": "icon-park:split-turn-down-left",
	});
}

export default Component;
