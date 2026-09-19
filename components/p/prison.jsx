import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qnx6idjmr.css';
import '../../css/q/q4kae-b_w.css';
import '../../css/h/hgrrm0nzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="qnx6idjmr"/><path class="q4kae-b_w"/><path class="hgrrm0nzr"/></g>`,
		"fallback": "icon-park-outline:prison",
	});
}

export default Component;
