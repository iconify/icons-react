import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pf1tdnshj.css';
import '../../css/o/onn26uc-u.css';
import '../../css/u/udh2xlitm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pf1tdnshj"/><path clip-rule="evenodd" class="onn26uc-u"/><path class="udh2xlitm"/></g>`,
		"fallback": "solar:turntable-music-note-bold-duotone",
	});
}

export default Component;
