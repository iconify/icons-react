import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ixv74mb6y.css';
import '../../css/c/cltoiebep.css';
import '../../css/t/t11v-vb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ixv74mb6y wm-k"/><path class="cltoiebep wm-k"/><path class="t11v-vb0a wm-k"/></g>`,
		"fallback": "withicons:user-sketch",
	});
}

export default Component;
