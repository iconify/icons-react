import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/ou4p876ph.css';
import '../../css/y/ywyki9b9z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ou4p876ph"/><path class="ywyki9b9z"/></g>`,
		"fallback": "icon-park:plus",
	});
}

export default Component;
