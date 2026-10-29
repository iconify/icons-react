import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l-pysdxjg.css';
import '../../css/l/lilb5_awy.css';
import '../../css/m/mo4-r3vsv.css';
import '../../css/x/x7twskxam.css';
import '../../css/k/kck-09bwl.css';
import '../../css/o/og3p9brbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l-pysdxjg"/><path class="lilb5_awy wm-k"/><path class="mo4-r3vsv wm-a"/><path class="wm-k x7twskxam"/><path class="kck-09bwl wm-a"/><path class="og3p9brbx wm-s"/></g>`,
		"fallback": "withicons:unplug-sketch",
	});
}

export default Component;
