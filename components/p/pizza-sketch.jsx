import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t_zmzab8k.css';
import '../../css/b/b6_46kbps.css';
import '../../css/f/fx7n841gh.css';
import '../../css/x/x2ymrx5ul.css';
import '../../css/o/ow20b-m-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t_zmzab8k"/><path class="b6_46kbps wm-k"/><path class="fx7n841gh wm-a"/><path class="wm-k x2ymrx5ul"/><path class="ow20b-m-k wm-a"/></g>`,
		"fallback": "withicons:pizza-sketch",
	});
}

export default Component;
