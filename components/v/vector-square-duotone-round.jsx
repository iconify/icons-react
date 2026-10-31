import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmmcdfmqh.css';
import '../../css/z/zecyhmblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xmmcdfmqh"/><path class="zecyhmblu"/></g>`,
		"fallback": "coolicons:vector-square-duotone-round",
	});
}

export default Component;
