import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m06w9wb3j.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/r/ryakbibif.css';
import '../../css/o/oceiybcet.css';
import '../../css/w/wkgmrpb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="m06w9wb3j wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="ryakbibif wm-k"/><path class="oceiybcet wm-a"/><path class="wkgmrpb_c wm-k"/></g>`,
		"fallback": "withicons:japanese-yen-blueprint",
	});
}

export default Component;
