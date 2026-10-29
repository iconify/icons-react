import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/grhn4x43p.css';
import '../../css/q/q4qupqb4k.css';
import '../../css/f/fipq_j4gc.css';
import '../../css/k/kz59c3b1j.css';
import '../../css/x/x8zkwfbgu.css';
import '../../css/a/au_aybbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="grhn4x43p wm-k"/><path class="q4qupqb4k wm-s"/><path class="fipq_j4gc wm-k"/><circle class="kz59c3b1j wm-a"/><path class="wm-a x8zkwfbgu"/><circle class="au_aybbmf wm-k"/></g>`,
		"fallback": "withicons:usb-sketch",
	});
}

export default Component;
