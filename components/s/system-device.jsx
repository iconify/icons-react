import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqc7n13jo.css';
import '../../css/x/x9c4v8b1c.css';
import '../../css/p/pf2hiil7q.css';
import '../../css/j/jrorbepjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eqc7n13jo"/><path class="x9c4v8b1c"/><path class="pf2hiil7q"/><path class="jrorbepjb"/></g>`,
		"fallback": "tdesign:system-device",
	});
}

export default Component;
