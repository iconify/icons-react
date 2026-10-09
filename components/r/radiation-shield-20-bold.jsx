import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdw3vx8xp.css';
import '../../css/e/e1hzf-y8n.css';
import '../../css/f/fdsiutbrn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdw3vx8xp"/><path class="e1hzf-y8n"/><path class="fdsiutbrn"/>`,
		"fallback": "energy-icons:radiation-shield-20-bold",
	});
}

export default Component;
