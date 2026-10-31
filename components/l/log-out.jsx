import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pjpukbcio.css';
import '../../css/g/gaju7dybd.css';
import '../../css/k/kpjv0nuqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGI0ZQLeQk" x1="9.25" x2="15.25" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGI0ZQLeQk)" class="pjpukbcio"/><path class="gaju7dybd wm-a"/><path class="kpjv0nuqm wm-shine"/></g>`,
		"fallback": "withicons-utsav:log-out",
	});
}

export default Component;
