import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvmliotit.css';
import '../../css/p/pu8wotszk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvmliotit"/><path class="pu8wotszk"/></g>`,
		"fallback": "hugeicons:undo-03",
	});
}

export default Component;
