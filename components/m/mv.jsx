import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xopa2uchp.css';
import '../../css/w/wc0uc0bfg.css';
import '../../css/n/n6xp0sbqe.css';
import '../../css/a/a0rpbnbuc.css';
import '../../css/z/z_my47b9f.css';
import '../../css/g/gdl09j3ua.css';
import '../../css/b/bhlu6bc_v.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xopa2uchp"/><path clip-rule="evenodd" class="wc0uc0bfg"/><path clip-rule="evenodd" class="n6xp0sbqe"/><path class="a0rpbnbuc"/><mask id="SVGJTD8UcTQ" width="20" height="12" x="6" y="6" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="z_my47b9f"/><path class="gdl09j3ua"/></mask><g mask="url(#SVGJTD8UcTQ)"><path clip-rule="evenodd" class="bhlu6bc_v"/></g></g>`,
		"fallback": "flagpack:mv",
	});
}

export default Component;
