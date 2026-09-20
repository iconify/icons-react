import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mxng0acwk.css';
import '../../css/l/l439blbrs.css';
import '../../css/c/ccyx194mo.css';
import '../../css/g/giisuu82f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="mxng0acwk"/><path class="l439blbrs"/><path class="ccyx194mo"/><path class="giisuu82f"/></g>`,
		"fallback": "streamline-cyber:network-refresh",
	});
}

export default Component;
