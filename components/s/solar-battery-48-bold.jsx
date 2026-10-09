import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o70_yqgvc.css';
import '../../css/m/m8ays9b5w.css';
import '../../css/i/i062jmb6q.css';
import '../../css/v/vjomywb8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o70_yqgvc"/><path class="m8ays9b5w"/><path class="i062jmb6q"/><path class="vjomywb8z"/>`,
		"fallback": "energy-icons:solar-battery-48-bold",
	});
}

export default Component;
