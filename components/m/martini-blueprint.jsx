import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sbi0pnbbr.css';
import '../../css/g/gfet84u9u.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/d/dl4uzpqwq.css';
import '../../css/d/dhqc4ebed.css';
import '../../css/m/mqqas-bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sbi0pnbbr wm-deco"/><path class="gfet84u9u wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="dl4uzpqwq wm-k"/><path class="dhqc4ebed wm-a"/><path class="mqqas-bsr wm-k"/></g>`,
		"fallback": "withicons:martini-blueprint",
	});
}

export default Component;
