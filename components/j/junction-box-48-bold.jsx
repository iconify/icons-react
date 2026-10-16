import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrn60viue.css';
import '../../css/f/fvyubxb-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrn60viue"/><path class="fvyubxb-f"/>`,
		"fallback": "energy-icons:junction-box-48-bold",
	});
}

export default Component;
