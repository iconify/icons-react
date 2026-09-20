import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/of1pldrdd.css';
import '../../css/l/lwth1y9ze.css';
import '../../css/d/du6ayylxo.css';
import '../../css/w/wwlql7biu.css';
import '../../css/a/a_g57bd-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="of1pldrdd"/><path class="lwth1y9ze"/><path class="du6ayylxo"/><path class="wwlql7biu"/><path class="a_g57bd-p"/></g>`,
		"fallback": "solar:paw-line-duotone",
	});
}

export default Component;
