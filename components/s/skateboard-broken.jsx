import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jjrrsabdw.css';
import '../../css/x/x9u4_etvk.css';
import '../../css/z/z7l_f7r4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jjrrsabdw"/><circle class="x9u4_etvk"/><circle class="z7l_f7r4c"/></g>`,
		"fallback": "solar:skateboard-broken",
	});
}

export default Component;
