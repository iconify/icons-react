import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d3a1uob4c.css';
import '../../css/v/vwuphg_jz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d3a1uob4c"/><path class="vwuphg_jz"/></g>`,
		"fallback": "hugeicons:underpants-03",
	});
}

export default Component;
