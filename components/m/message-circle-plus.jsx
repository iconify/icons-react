import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2ctuqbrs.css';
import '../../css/b/bq3ts__ko.css';
import '../../css/y/yupu_7b9c.css';
import '../../css/j/j4gg7y4la.css';
import '../../css/q/q6cpk433d.css';
import '../../css/z/z6cwleahl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m2ctuqbrs wm-k"/><path class="bq3ts__ko wm-k"/><path class="wm-k yupu_7b9c"/><path class="j4gg7y4la wm-k"/><path class="q6cpk433d wm-shine"/><path class="wm-a z6cwleahl"/></g>`,
		"fallback": "withicons-anime:message-circle-plus",
	});
}

export default Component;
