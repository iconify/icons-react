import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfbb1fbyd.css';
import '../../css/h/h4_86xb7u.css';
import '../../css/o/o8n6aqd3r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfbb1fbyd"/><path class="h4_86xb7u"/><path class="o8n6aqd3r"/>`,
		"fallback": "energy-icons:power-cable-48-bold",
	});
}

export default Component;
