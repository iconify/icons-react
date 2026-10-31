import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/ns7jo5bxj.css';
import '../../css/f/fa-9vwbam.css';
import '../../css/w/w517zzo6n.css';
import '../../css/t/t-ks99bsq.css';
import '../../css/o/ovv33ebjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ns7jo5bxj wm-shadow"/><path class="fa-9vwbam wm-shadow"/><path class="w517zzo6n"/><path class="t-ks99bsq"/><path class="ovv33ebjl"/></g>`,
		"fallback": "withicons-brutal:rewind",
	});
}

export default Component;
