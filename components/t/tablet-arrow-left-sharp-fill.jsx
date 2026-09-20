import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gz6xjjb1q.css';
import '../../css/a/ab466_bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="gz6xjjb1q"/><path class="ab466_bwq"/></g>`,
		"fallback": "keyline-icons:tablet-arrow-left-sharp-fill",
	});
}

export default Component;
