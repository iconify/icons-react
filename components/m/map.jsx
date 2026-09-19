import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/him3u7bwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="him3u7bwy"/>`,
		"fallback": "famicons:map",
	});
}

export default Component;
