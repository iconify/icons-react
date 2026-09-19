import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stknrr2es.css';
import '../../css/a/a_hewbdmu.css';
import '../../css/o/oilmmsbgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stknrr2es"/><path class="a_hewbdmu"/><path class="oilmmsbgk"/></g>`,
		"fallback": "icon-park-solid:list-alphabet",
	});
}

export default Component;
