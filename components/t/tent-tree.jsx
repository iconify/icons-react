import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/w/wubqooj-f.css';
import '../../css/o/onxfb1bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="p9vjoqtlo"/><path class="wubqooj-f"/><path class="onxfb1bcg"/></g>`,
		"fallback": "hugeicons:tent-tree",
	});
}

export default Component;
