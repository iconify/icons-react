import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m-2wupbos.css';
import '../../css/q/q7g5sf5wm.css';
import '../../css/w/we227k77z.css';
import '../../css/v/vy66crryu.css';
import '../../css/j/jiaa8rnkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="m-2wupbos"/><path class="q7g5sf5wm"/><circle class="we227k77z"/><path class="vy66crryu"/><path class="jiaa8rnkm"/></g>`,
		"fallback": "icon-park:watch-one",
	});
}

export default Component;
