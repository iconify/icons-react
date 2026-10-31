import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kunmmyb9o.css';
import '../../css/v/vzrq9d_qx.css';
import '../../css/t/t350fvbjo.css';
import '../../css/k/kjd5hmbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGrwFx3dYm" x1="9.01" x2="15.01" y1="1.26" y2="19.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGrwFx3dYm)" class="kunmmyb9o"/><path class="vzrq9d_qx wm-a"/><path class="t350fvbjo wm-s"/><path class="kjd5hmbqa wm-shine"/></g>`,
		"fallback": "withicons-utsav:reindeer",
	});
}

export default Component;
