import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kah3_b10j.css';
import '../../css/u/ursec-40v.css';
import '../../css/s/sc4xlcbaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kah3_b10j"/><path class="ursec-40v"/><path class="sc4xlcbaz"/></g>`,
		"fallback": "icon-park:spider-man",
	});
}

export default Component;
