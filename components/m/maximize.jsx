import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boupjfb-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boupjfb-l"/>`,
		"fallback": "doodle-icons:maximize",
	});
}

export default Component;
