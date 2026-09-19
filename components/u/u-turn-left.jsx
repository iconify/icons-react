import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/m/mqowuqbjp.css';
import '../../css/z/zf6nr4d2o.css';
import '../../css/g/g0v9dsb-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="mqowuqbjp"/><path class="zf6nr4d2o"/><circle class="g0v9dsb-m"/></g>`,
		"fallback": "icon-park:u-turn-left",
	});
}

export default Component;
