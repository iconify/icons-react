import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yz0ujqbim.css';
import '../../css/k/kdd-19ezf.css';
import '../../css/h/hw34cebkg.css';
import '../../css/m/mcvbrbb3a.css';
import '../../css/w/winjwabdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yz0ujqbim"/><path class="kdd-19ezf"/><path class="hw34cebkg"/><path class="mcvbrbb3a"/><path clip-rule="evenodd" class="winjwabdp"/></g>`,
		"fallback": "solar:minimalistic-magnifer-bug-bold",
	});
}

export default Component;
