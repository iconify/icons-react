import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ojpnoebxg.css';
import '../../css/z/z686sq8ka.css';
import '../../css/s/s9xijib5f.css';
import '../../css/f/fx3xvojda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ojpnoebxg wm-k"/><path class="wm-a z686sq8ka"/><path class="s9xijib5f wm-k"/><path class="fx3xvojda wm-a"/></g>`,
		"fallback": "withicons:trending-up-sketch",
	});
}

export default Component;
