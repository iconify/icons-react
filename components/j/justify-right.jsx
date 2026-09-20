import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vo1mf_bms.css';
import '../../css/o/oscgiacky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vo1mf_bms"/><path vector-effect="non-scaling-stroke" class="oscgiacky"/></g>`,
		"fallback": "wordpress:justify-right",
	});
}

export default Component;
