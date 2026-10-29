import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6lixabwl.css';
import '../../css/e/enxzbi6mw.css';
import '../../css/w/w0wga4e3s.css';
import '../../css/g/guf5xbclf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6lixabwl wm-k"/><path class="enxzbi6mw wm-k"/><path class="w0wga4e3s wm-k"/><path class="guf5xbclf wm-shine"/></g>`,
		"fallback": "withicons-anime:plus",
	});
}

export default Component;
