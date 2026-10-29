import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sl1_3cb7n.css';
import '../../css/w/w5xuimedp.css';
import '../../css/f/ft3chybja.css';
import '../../css/y/ywuh7ec-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sl1_3cb7n"/><path class="w5xuimedp wm-a"/><path class="ft3chybja wm-k"/><path class="wm-a ywuh7ec-u"/></g>`,
		"fallback": "withicons:plug-sketch",
	});
}

export default Component;
