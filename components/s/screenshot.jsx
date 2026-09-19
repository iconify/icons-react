import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/yv-u3gr2g.css';
import '../../css/m/mdfd69mwt.css';
import '../../css/q/q41v6geqj.css';
import '../../css/m/m-2iqioyf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="yv-u3gr2g"/><path class="mdfd69mwt"/><path class="q41v6geqj"/><path class="m-2iqioyf"/></g>`,
		"fallback": "icon-park-solid:screenshot",
	});
}

export default Component;
