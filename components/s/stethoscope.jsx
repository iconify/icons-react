import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sn6ctbueb.css';
import '../../css/i/ia_6o7hbh.css';
import '../../css/l/lo_qdmgth.css';
import '../../css/u/u7ct2xx4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sn6ctbueb"/><path class="ia_6o7hbh"/><path class="lo_qdmgth"/><path class="u7ct2xx4v"/></g>`,
		"fallback": "hugeicons:stethoscope",
	});
}

export default Component;
