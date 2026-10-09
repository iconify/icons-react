import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oolum954d.css';
import '../../css/n/nbgn9e5js.css';
import '../../css/z/zdve79nyr.css';
import '../../css/p/pc7o7n93n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oolum954d"/><path class="nbgn9e5js"/><path class="zdve79nyr"/><path class="pc7o7n93n"/>`,
		"fallback": "energy-icons:port-48-bold",
	});
}

export default Component;
