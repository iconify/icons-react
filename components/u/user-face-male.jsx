import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mke74wskt.css';
import '../../css/t/t61m25u4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="mke74wskt"/><path class="t61m25u4g"/></g>`,
		"fallback": "streamline-plump:user-face-male",
	});
}

export default Component;
