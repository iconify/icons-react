import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ksg8-enya.css';
import '../../css/f/f1eli5bnp.css';
import '../../css/z/z9s20sbln.css';
import '../../css/a/ax2wmnnmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ksg8-enya"/><path class="f1eli5bnp wm-a"/><path class="wm-k z9s20sbln"/><path class="ax2wmnnmn wm-a"/></g>`,
		"fallback": "withicons:thermometer-sun-sketch",
	});
}

export default Component;
