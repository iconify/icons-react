import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/l/l3c9lplte.css';
import '../../css/j/jebph_z3j.css';
import '../../css/v/v6eawsb5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="l3c9lplte"/><path class="jebph_z3j"/><path class="v6eawsb5q"/></g>`,
		"fallback": "streamline-plump:notification-alarm-snooze",
	});
}

export default Component;
