import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ebgmn1bwx.css';
import '../../css/p/p7aq10b2c.css';
import '../../css/b/bt2vd8brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ebgmn1bwx"/><path class="p7aq10b2c"/><path class="bt2vd8brk"/></g>`,
		"fallback": "solar:three-squares-broken",
	});
}

export default Component;
