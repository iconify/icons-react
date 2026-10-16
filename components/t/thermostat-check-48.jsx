import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i42iihbqt.css';
import '../../css/l/l4p0db2vd.css';
import '../../css/h/h3_74q9gb.css';
import '../../css/h/h95v30bmf.css';
import '../../css/q/qdytrdbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i42iihbqt"/><path class="l4p0db2vd"/><path class="h3_74q9gb"/><path class="h95v30bmf"/><path class="qdytrdbev"/>`,
		"fallback": "energy-icons:thermostat-check-48",
	});
}

export default Component;
