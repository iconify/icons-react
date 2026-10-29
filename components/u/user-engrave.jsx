import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nyo9d_2dy.css';
import '../../css/p/pexkecb2t.css';
import '../../css/x/xvkzbpb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nyo9d_2dy"/><path class="pexkecb2t wm-shadow"/><path class="xvkzbpb0a"/></g>`,
		"fallback": "withicons:user-engrave",
	});
}

export default Component;
