import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awek-epgl.css';
import '../../css/b/brfai6b9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awek-epgl"/><path class="brfai6b9m"/>`,
		"fallback": "energy-icons:soldering-iron-48",
	});
}

export default Component;
