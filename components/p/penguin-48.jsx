import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wibsj_byf.css';
import '../../css/w/w303u3a6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wibsj_byf"/><path class="w303u3a6k"/>`,
		"fallback": "energy-icons:penguin-48",
	});
}

export default Component;
