import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w14-s-b-s.css';
import '../../css/r/rga8t9bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="w14-s-b-s"/><path class="rga8t9bxw"/></g>`,
		"fallback": "humbleicons:search",
	});
}

export default Component;
