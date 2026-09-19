import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kur4tfbds.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kur4tfbds"/>`,
		"fallback": "fa-brands:speakap",
	});
}

export default Component;
