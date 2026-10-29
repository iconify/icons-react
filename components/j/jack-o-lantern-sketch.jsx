import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zqeiqactw.css';
import '../../css/m/mk_kcm8ka.css';
import '../../css/y/yn4ol3bhc.css';
import '../../css/g/gdtxx_biq.css';
import '../../css/u/uzvf84bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-a zqeiqactw"/><path class="mk_kcm8ka wm-s"/><path class="wm-k yn4ol3bhc"/><path class="gdtxx_biq wm-a"/><path class="uzvf84bcr wm-s"/></g>`,
		"fallback": "withicons:jack-o-lantern-sketch",
	});
}

export default Component;
