import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y479ucc5d.css';
import '../../css/a/ax13qlbtc.css';
import '../../css/k/kmwrnkbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y479ucc5d"/><path class="ax13qlbtc"/><path clip-rule="evenodd" class="kmwrnkbku"/></g>`,
		"fallback": "reicon:upload-track-filled",
	});
}

export default Component;
