import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vrfh-0b0p.css';
import '../../css/a/atzvr8u7p.css';
import '../../css/q/qb68vebfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vrfh-0b0p"/><path class="atzvr8u7p"/><path class="qb68vebfj"/></g>`,
		"fallback": "icon-park:translation",
	});
}

export default Component;
