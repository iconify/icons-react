import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niip9pb1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niip9pb1l"/>`,
		"fallback": "file-icons:test-go",
	});
}

export default Component;
