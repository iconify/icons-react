import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hcs_5rbvj.css';
import '../../css/w/ws-eb1b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hcs_5rbvj"/><path class="ws-eb1b7h"/></g>`,
		"fallback": "hugeicons:panel-right-open",
	});
}

export default Component;
