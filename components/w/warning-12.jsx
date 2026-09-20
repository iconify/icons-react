import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skrsffb9p.css';
import '../../css/q/qll572bfj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skrsffb9p"/><path clip-rule="evenodd" class="qll572bfj"/>`,
		"fallback": "qlementine-icons:warning-12",
	});
}

export default Component;
