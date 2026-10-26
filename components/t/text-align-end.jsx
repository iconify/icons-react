import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr4wmqb0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr4wmqb0l"/>`,
		"fallback": "doodle-icons:text-align-end",
	});
}

export default Component;
