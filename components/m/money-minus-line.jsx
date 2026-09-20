import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ivf7b8b3g.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/o/okp7pp4nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ivf7b8b3g"/><circle class="h_tsn8bxt"/><path class="okp7pp4nk"/></g>`,
		"fallback": "majesticons:money-minus-line",
	});
}

export default Component;
