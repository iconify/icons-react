import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/ft-nr84oc.css';
import '../../css/z/zia4plbis.css';
import '../../css/x/xbt_tmtte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ft-nr84oc"/><path class="zia4plbis"/><path class="xbt_tmtte"/></g>`,
		"fallback": "solar:panorama-line-duotone",
	});
}

export default Component;
