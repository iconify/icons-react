import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xie0ipbtn.css';
import '../../css/m/m0_uv8bsz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="xie0ipbtn"/><path class="m0_uv8bsz"/></g>`,
		"fallback": "streamline-plump:pen-1",
	});
}

export default Component;
