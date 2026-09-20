import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/d/dn_eiebwk.css';
import '../../css/y/y3jhmd2ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="dn_eiebwk"/><path class="y3jhmd2ah"/></g>`,
		"fallback": "solar:panel-top-close-line-duotone",
	});
}

export default Component;
