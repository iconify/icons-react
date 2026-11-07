import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc0y0bdho.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jqsfrz9lo.css';
import '../../css/h/hd4nyobgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc0y0bdho"/><g class="xtpeb-edw"><path class="jqsfrz9lo"/><path class="hd4nyobgw"/></g>`,
		"fallback": "solar:stars-minimalistic-bold-duotone",
	});
}

export default Component;
