import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/byp4rtb1l.css';
import '../../css/d/ds04a6xpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="byp4rtb1l"/><path class="ds04a6xpw"/></g>`,
		"fallback": "reicon:volume-low",
	});
}

export default Component;
