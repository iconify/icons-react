import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ilkb2nbry.css';
import '../../css/y/y7imwfbvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="ilkb2nbry"/><path class="y7imwfbvd"/></g>`,
		"fallback": "icon-park:right-expand",
	});
}

export default Component;
