import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/j/j4cvtu_gj.css';
import '../../css/k/kagyhebbk.css';
import '../../css/t/tot9b3b8d.css';
import '../../css/o/o2ilxycix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="j4cvtu_gj"/><path class="kagyhebbk"/><circle class="tot9b3b8d"/><path class="o2ilxycix"/></g>`,
		"fallback": "icon-park-outline:permissions",
	});
}

export default Component;
