import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tokyw_wee.css';
import '../../css/d/d-e_uzblj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tokyw_wee"/><path class="d-e_uzblj"/></g>`,
		"fallback": "icon-park:rotation",
	});
}

export default Component;
