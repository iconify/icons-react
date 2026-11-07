import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a_v4sl8xe.css';
import '../../css/c/c4kuzacnf.css';
import '../../css/g/gvam3ngsc.css';
import '../../css/m/m87x8mmiu.css';
import '../../css/b/bari53b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a_v4sl8xe"/><path class="c4kuzacnf"/><path class="gvam3ngsc"/><path class="m87x8mmiu"/><path class="bari53b2u"/></g>`,
		"fallback": "solar:star-off-broken",
	});
}

export default Component;
