import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3q6uacna.css';
import '../../css/v/vuoldp53f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3q6uacna"/><path class="vuoldp53f"/>`,
		"fallback": "energy-icons:terminal-square-48",
	});
}

export default Component;
