import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m84t_4viq.css';
import '../../css/p/p4-x7940g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m84t_4viq"/><path class="p4-x7940g"/></g>`,
		"fallback": "solar:refresh-line-duotone",
	});
}

export default Component;
