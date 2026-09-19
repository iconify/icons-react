import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/auewfk7pa.css';
import '../../css/o/oxhqg771w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="auewfk7pa"/><path class="oxhqg771w"/></g>`,
		"fallback": "icon-park:pause",
	});
}

export default Component;
