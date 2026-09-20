import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o_onwfy1m.css';
import '../../css/g/gyg0kccyn.css';
import '../../css/o/oomhv1bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="o_onwfy1m"/><path class="gyg0kccyn"/><path class="oomhv1bom"/></g>`,
		"fallback": "solar:user-heart-rounded-broken",
	});
}

export default Component;
