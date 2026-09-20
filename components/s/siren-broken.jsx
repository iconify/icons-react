import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wrv8dzbkt.css';
import '../../css/b/b4ae6zb-r.css';
import '../../css/h/hoew1_bin.css';
import '../../css/s/ssofjby4d.css';
import '../../css/m/mbihc-bcr.css';
import '../../css/w/w463bhbii.css';
import '../../css/e/e-4bmobwc.css';
import '../../css/o/obcs1cbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wrv8dzbkt"/><path class="b4ae6zb-r"/><path class="hoew1_bin"/><path class="ssofjby4d"/><path class="mbihc-bcr"/><path class="w463bhbii"/><path class="e-4bmobwc"/><path class="obcs1cbgf"/></g>`,
		"fallback": "solar:siren-broken",
	});
}

export default Component;
