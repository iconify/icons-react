import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i42iihbqt.css';
import '../../css/l/l4p0db2vd.css';
import '../../css/h/h3_74q9gb.css';
import '../../css/h/h95v30bmf.css';
import '../../css/e/empdt5byq.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i42iihbqt"/><path class="l4p0db2vd"/><path class="h3_74q9gb"/><path class="h95v30bmf"/><path class="empdt5byq"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:thermostat-x-48",
	});
}

export default Component;
