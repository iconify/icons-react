import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/g8h59jbek.css';
import '../../css/h/hztpaebqm.css';
import '../../css/f/f2odc6ada.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGirC8eeGG" x1="8.99" x2="14.99" y1=".98" y2="22.62" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGirC8eeGG)" class="g8h59jbek"/><path class="hztpaebqm wm-a"/><path class="f2odc6ada wm-shine"/></g>`,
		"fallback": "withicons-utsav:tennis",
	});
}

export default Component;
