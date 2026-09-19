import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xphwdosvg.css';
import '../../css/w/w_0vaslvt.css';
import '../../css/t/tcqvgbceq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xphwdosvg"/><path class="w_0vaslvt"/><rect class="tcqvgbceq"/></g>`,
		"fallback": "icon-park:skates",
	});
}

export default Component;
