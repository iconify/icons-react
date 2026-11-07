import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxpoqcbtn.css';
import '../../css/f/fgxux-b-v.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/huw4b6big.css';
import '../../css/m/mt3e7vqmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxpoqcbtn"/><path clip-rule="evenodd" class="fgxux-b-v"/><g class="xtpeb-edw"><path class="huw4b6big"/><path class="mt3e7vqmm"/></g>`,
		"fallback": "solar:music-library-2-bold-duotone",
	});
}

export default Component;
