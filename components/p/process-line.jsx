import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnea9oquu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnea9oquu"/>`,
		"fallback": "icon-park-outline:process-line",
	});
}

export default Component;
