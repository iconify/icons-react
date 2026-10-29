import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sqsx9ox8k.css';
import '../../css/p/p3xx_sbre.css';
import '../../css/y/yk-er9b1u.css';
import '../../css/w/wgep9sb5p.css';
import '../../css/z/zbwddqbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sqsx9ox8k"/><path class="p3xx_sbre wm-k"/><path class="wm-a yk-er9b1u"/><path class="wgep9sb5p wm-k"/><path class="wm-a zbwddqbyl"/></g>`,
		"fallback": "withicons:milk-sketch",
	});
}

export default Component;
