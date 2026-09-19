import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gndorrpbi.css';
import '../../css/m/md286fbip.css';
import '../../css/j/jhukr2_rw.css';
import '../../css/w/w2xyjlbmw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gndorrpbi"/><g class="md286fbip"><path class="jhukr2_rw"/><path class="w2xyjlbmw"/></g></g>`,
		"fallback": "cryptocurrency-color:ntbc",
	});
}

export default Component;
