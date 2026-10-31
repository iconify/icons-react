import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/chgqk5ert.css';
import '../../css/j/ju8dvbh7k.css';
import '../../css/e/e0-el1iid.css';
import '../../css/m/md9z0kb0f.css';
import '../../css/q/q1ah38bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgDlLTcjk" x1="9.37" x2="15.37" y1="1.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="chgqk5ert wm-s"/><path fill="url(#SVGgDlLTcjk)" class="ju8dvbh7k"/><path class="e0-el1iid wm-a"/><path class="md9z0kb0f wm-s"/><path class="q1ah38bip wm-shine"/></g>`,
		"fallback": "withicons-utsav:sparkler",
	});
}

export default Component;
