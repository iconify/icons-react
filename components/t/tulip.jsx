import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuhrwsh0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuhrwsh0m"/>`,
		"fallback": "ix:tulip",
	});
}

export default Component;
