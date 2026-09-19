import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jjd5w6yye.css';
import '../../css/u/uhtv9sb_l.css';
import '../../css/g/gpj9vmplz.css';
import '../../css/l/l0j9bdc-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jjd5w6yye"/><path class="uhtv9sb_l"/><path class="gpj9vmplz"/><path class="l0j9bdc-m"/></g>`,
		"fallback": "hugeicons:pickup-02",
	});
}

export default Component;
