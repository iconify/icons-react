import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-lqvvf1i.css';
import '../../css/f/fik-sl3gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r-lqvvf1i"/><path class="fik-sl3gj"/></g>`,
		"fallback": "lucide:notebook-pen",
	});
}

export default Component;
