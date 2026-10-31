import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/en81wyb9a.css';
import '../../css/c/cpnonbbcl.css';
import '../../css/v/v3gezybzm.css';
import '../../css/a/a6zhs8tpr.css';
import '../../css/h/hla2uub2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyS53PGOI" x1="9" x2="15" y1="1.01" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyS53PGOI)" class="en81wyb9a"/><path class="cpnonbbcl wm-a"/><path class="v3gezybzm wm-shine"/><path class="a6zhs8tpr wm-shine"/><path class="hla2uub2c wm-shine"/></g>`,
		"fallback": "withicons-utsav:north-star",
	});
}

export default Component;
