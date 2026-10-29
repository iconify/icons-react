import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sui797a8q.css';
import '../../css/l/lvq0wrbag.css';
import '../../css/x/xm0x-pb6v.css';
import '../../css/n/nccywjbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sui797a8q wm-k"/><path class="lvq0wrbag wm-a"/><path class="wm-k xm0x-pb6v"/><path class="nccywjbya wm-a"/></g>`,
		"fallback": "withicons:scan-sketch",
	});
}

export default Component;
