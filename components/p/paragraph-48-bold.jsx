import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4_y_kbip.css';
import '../../css/q/qpe8ekbrc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4_y_kbip"/><path class="qpe8ekbrc"/>`,
		"fallback": "energy-icons:paragraph-48-bold",
	});
}

export default Component;
