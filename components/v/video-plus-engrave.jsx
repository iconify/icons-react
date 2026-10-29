import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rdwsmhbbt.css';
import '../../css/h/h-88fv_ot.css';
import '../../css/l/liwxtwofv.css';
import '../../css/z/za3dt0bho.css';
import '../../css/r/rcb7clbki.css';
import '../../css/k/k-k6k285a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rdwsmhbbt wm-k"/><path class="h-88fv_ot wm-a"/><path class="liwxtwofv wm-shadow"/><path class="wm-k za3dt0bho"/><path class="rcb7clbki wm-a"/><path class="k-k6k285a wm-s"/></g>`,
		"fallback": "withicons:video-plus-engrave",
	});
}

export default Component;
