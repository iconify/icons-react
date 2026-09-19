import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nr9qosbpk.css';
import '../../css/w/wxxouib_y.css';
import '../../css/k/kg1i0slxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nr9qosbpk"/><path class="wxxouib_y"/><path class="kg1i0slxp"/></g>`,
		"fallback": "hugeicons:stethoscope-02",
	});
}

export default Component;
