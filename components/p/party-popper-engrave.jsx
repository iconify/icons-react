import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vcpzg7aye.css';
import '../../css/v/v3_hq_fsh.css';
import '../../css/y/ycbbk4eww.css';
import '../../css/m/m2b5tif2m.css';
import '../../css/s/svav8jh5q.css';
import '../../css/d/dikszcc_o.css';
import '../../css/s/sjl2bfbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vcpzg7aye wm-k"/><path class="v3_hq_fsh wm-a"/><path class="wm-s ycbbk4eww"/><path class="m2b5tif2m wm-shadow"/><path class="svav8jh5q wm-k"/><path class="dikszcc_o wm-a"/><path class="sjl2bfbwr wm-s"/></g>`,
		"fallback": "withicons:party-popper-engrave",
	});
}

export default Component;
