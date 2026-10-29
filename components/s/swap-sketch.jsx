import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t46nd_b7v.css';
import '../../css/b/b4zzipb8w.css';
import '../../css/s/sfvyxjmsv.css';
import '../../css/b/bfd9jmbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t46nd_b7v wm-k"/><path class="b4zzipb8w wm-a"/><path class="sfvyxjmsv wm-k"/><path class="bfd9jmbir wm-a"/></g>`,
		"fallback": "withicons:swap-sketch",
	});
}

export default Component;
