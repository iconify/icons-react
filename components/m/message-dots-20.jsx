import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itmoa867s.css';
import '../../css/n/nhhca1beb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itmoa867s"/><path class="nhhca1beb"/>`,
		"fallback": "energy-icons:message-dots-20",
	});
}

export default Component;
