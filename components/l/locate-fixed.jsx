import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/i6h2gnb1p.css';
import '../../css/h/he23t63-c.css';
import '../../css/q/qtehlog0q.css';
import '../../css/i/isekl68cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyS53PGOI" x1="9" x2="15" y1="1.01" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyS53PGOI)" class="i6h2gnb1p"/><path class="he23t63-c wm-shine"/><path class="qtehlog0q wm-shine"/><path class="isekl68cr wm-shine"/></g>`,
		"fallback": "withicons-utsav:locate-fixed",
	});
}

export default Component;
