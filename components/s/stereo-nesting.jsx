import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hib-_bcgr.css';
import '../../css/o/oq0tn5b5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hib-_bcgr"/><path class="oq0tn5b5z"/></g>`,
		"fallback": "icon-park:stereo-nesting",
	});
}

export default Component;
