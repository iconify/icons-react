import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubpdn3bmc.css';
import '../../css/t/trlqjeajb.css';
import '../../css/g/g-ivzeb0n.css';
import '../../css/i/ix78z_i7m.css';
import '../../css/d/d3avvcbnf.css';
import '../../css/b/bnkvcdced.css';
import '../../css/d/d6vuq9e-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubpdn3bmc wm-shadow"/><path class="trlqjeajb wm-k"/><path class="g-ivzeb0n wm-k"/><path class="ix78z_i7m wm-k"/><path class="d3avvcbnf wm-k"/><path class="bnkvcdced wm-k"/><path class="d6vuq9e-i wm-shine"/>`,
		"fallback": "withicons-pastel:redo",
	});
}

export default Component;
