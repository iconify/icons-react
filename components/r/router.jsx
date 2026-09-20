import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vk0lcibke.css';
import '../../css/q/qad_0-bfd.css';
import '../../css/l/l3fgp_bdo.css';
import '../../css/r/rx-dy4b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vk0lcibke"/><path clip-rule="evenodd" class="qad_0-bfd"/><path class="l3fgp_bdo"/><path class="rx-dy4b5a"/></g>`,
		"fallback": "reicon:router",
	});
}

export default Component;
