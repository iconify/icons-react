import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1osud8tz.css';
import '../../css/s/spvzilqpr.css';
import '../../css/a/aqd5nkwct.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1osud8tz"/><path class="spvzilqpr"/><path class="aqd5nkwct"/>`,
		"fallback": "energy-icons:load-balancing-20",
	});
}

export default Component;
