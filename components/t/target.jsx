import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n0wet7blz.css';
import '../../css/n/nezm72bmx.css';
import '../../css/e/euz7ffb6m.css';
import '../../css/w/wvc0fkyxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="n0wet7blz"/><path class="nezm72bmx"/><path class="euz7ffb6m"/><path class="wvc0fkyxx"/></g>`,
		"fallback": "icon-park:target",
	});
}

export default Component;
