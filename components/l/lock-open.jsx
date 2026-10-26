import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz3_v7_xs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz3_v7_xs"/>`,
		"fallback": "doodle-icons:lock-open",
	});
}

export default Component;
