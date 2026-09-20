import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mteuttr2u.css';
import '../../css/d/drp_8bixm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mteuttr2u"/><path class="drp_8bixm"/></g>`,
		"fallback": "streamline-ultimate:tools-kitchen-scale",
	});
}

export default Component;
