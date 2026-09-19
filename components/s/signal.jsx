import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hl2hibcig.css';
import '../../css/x/xpmq-ccdk.css';
import '../../css/o/onsd48b_g.css';
import '../../css/d/d8rwe23al.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hl2hibcig"/><path class="xpmq-ccdk"/><path class="onsd48b_g"/><path class="d8rwe23al"/></g>`,
		"fallback": "icon-park:signal",
	});
}

export default Component;
