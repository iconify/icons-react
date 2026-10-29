import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xoe6bwbqi.css';
import '../../css/u/u7jxipbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xoe6bwbqi"/><path class="u7jxipbtn"/></g>`,
		"fallback": "withicons:key-sketch",
	});
}

export default Component;
