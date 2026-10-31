import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/l4rqrsbrj.css';
import '../../css/y/y3m59qbyh.css';
import '../../css/b/bp8htlbif.css';
import '../../css/g/gh0plq6sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="l4rqrsbrj"/><path class="wm-shine y3m59qbyh"/><path class="bp8htlbif wm-shine"/><path class="gh0plq6sh wm-shine"/></g>`,
		"fallback": "withicons-utsav:mouse",
	});
}

export default Component;
