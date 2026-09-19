import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/q/qgymvr2-d.css';
import '../../css/y/ytep3bcxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="qgymvr2-d"/><path class="ytep3bcxs"/></g>`,
		"fallback": "icon-park-solid:thin",
	});
}

export default Component;
