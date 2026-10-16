import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktbqdwbht.css';
import '../../css/b/b6-euybfo.css';
import '../../css/l/l3a7n9d9j.css';
import '../../css/s/szj6ewbna.css';
import '../../css/v/v1r0_jbld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktbqdwbht"/><path class="b6-euybfo"/><path class="l3a7n9d9j"/><path class="szj6ewbna"/><path class="v1r0_jbld"/>`,
		"fallback": "energy-icons:timeline-48-bold",
	});
}

export default Component;
