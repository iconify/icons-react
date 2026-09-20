import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p3f9wkane.css';
import '../../css/l/ljyyucbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p3f9wkane"/><path class="ljyyucbks"/></g>`,
		"fallback": "keyline-icons:text-quote-duotone",
	});
}

export default Component;
