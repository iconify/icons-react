import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3wykd21z.css';
import '../../css/e/evcip965b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="x3wykd21z"/><rect class="evcip965b"/></g>`,
		"fallback": "lucide:stretch-vertical",
	});
}

export default Component;
