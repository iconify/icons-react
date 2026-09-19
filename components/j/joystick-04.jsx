import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nfmledbok.css';
import '../../css/d/ds1rgtbzu.css';
import '../../css/x/xfsy1sb2g.css';
import '../../css/g/goeqvsb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nfmledbok"/><path class="ds1rgtbzu"/><path class="xfsy1sb2g"/><path class="goeqvsb6t"/></g>`,
		"fallback": "hugeicons:joystick-04",
	});
}

export default Component;
