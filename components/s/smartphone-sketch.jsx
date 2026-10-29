import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z66tkfv3t.css';
import '../../css/t/tbhozsb4v.css';
import '../../css/c/ccaydnkju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z66tkfv3t"/><path class="tbhozsb4v wm-k"/><path class="ccaydnkju wm-a"/></g>`,
		"fallback": "withicons:smartphone-sketch",
	});
}

export default Component;
