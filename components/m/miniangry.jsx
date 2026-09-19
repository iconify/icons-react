import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8r3cvk8p.css';

const viewBox = {"width":1024,"height":897};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8r3cvk8p"/>`,
		"fallback": "whh:miniangry",
	});
}

export default Component;
