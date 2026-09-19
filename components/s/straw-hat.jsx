import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/u/ue77sibcn.css';
import '../../css/x/xp3d3sbpi.css';
import '../../css/o/olht3hb0p.css';
import '../../css/t/t-epvf-9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ue77sibcn"/><path class="xp3d3sbpi"/><path class="olht3hb0p"/><path class="t-epvf-9u"/></g>`,
		"fallback": "icon-park:straw-hat",
	});
}

export default Component;
