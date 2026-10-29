import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hrc3voxan.css';
import '../../css/k/kdj-p2bid.css';
import '../../css/s/s8d0q6baj.css';
import '../../css/f/frsup1bzk.css';
import '../../css/n/n5a7qlyhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hrc3voxan wm-k"/><path class="kdj-p2bid wm-a"/><path class="s8d0q6baj wm-shadow"/><path class="frsup1bzk wm-k"/><path class="n5a7qlyhu wm-a"/></g>`,
		"fallback": "withicons:router-engrave",
	});
}

export default Component;
