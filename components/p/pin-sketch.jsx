import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x5tr0cc0q.css';
import '../../css/q/qmcm-kbhi.css';
import '../../css/p/ppo49n8pg.css';
import '../../css/t/txm-rabnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x5tr0cc0q"/><path class="qmcm-kbhi wm-a"/><path class="ppo49n8pg wm-k"/><path class="txm-rabnp wm-a"/></g>`,
		"fallback": "withicons:pin-sketch",
	});
}

export default Component;
