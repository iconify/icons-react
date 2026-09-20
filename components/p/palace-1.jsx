import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp-eqwb-s.css';
import '../../css/g/g3banh52s.css';
import '../../css/j/jn-l27cew.css';
import '../../css/c/cu3r39b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rp-eqwb-s"/><path class="g3banh52s"/><path class="jn-l27cew"/><path class="cu3r39b7s"/></g>`,
		"fallback": "tdesign:palace-1",
	});
}

export default Component;
