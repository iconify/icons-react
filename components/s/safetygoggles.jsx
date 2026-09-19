import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlyg48kvx.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlyg48kvx"/>`,
		"fallback": "whh:safetygoggles",
	});
}

export default Component;
