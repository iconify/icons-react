import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/psrodtbhb.css';
import '../../css/g/g6bwjdbfx.css';
import '../../css/e/e9l9xdbia.css';
import '../../css/m/m-x7fwbmq.css';
import '../../css/l/l0-i0_see.css';
import '../../css/i/i-ogceh1p.css';
import '../../css/a/ato8yrb-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="psrodtbhb"/><path class="g6bwjdbfx"/><path class="e9l9xdbia"/><path class="m-x7fwbmq"/><path class="l0-i0_see"/><path class="i-ogceh1p"/><path class="ato8yrb-d"/></g>`,
		"fallback": "icon-park:lincoln",
	});
}

export default Component;
