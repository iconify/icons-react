import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xuinpacag.css';
import '../../css/b/bfs19dopd.css';
import '../../css/j/jxh2xkbqg.css';
import '../../css/j/jaiyo2drh.css';
import '../../css/n/nd1c97bsl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xuinpacag"/><path class="bfs19dopd"/><path class="jxh2xkbqg"/><path class="jaiyo2drh"/><path class="nd1c97bsl"/></g>`,
		"fallback": "icon-park:road",
	});
}

export default Component;
