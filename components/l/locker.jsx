import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sigfwwf4r.css';
import '../../css/k/kamdbib6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sigfwwf4r"/><path class="kamdbib6v"/></g>`,
		"fallback": "hugeicons:locker",
	});
}

export default Component;
