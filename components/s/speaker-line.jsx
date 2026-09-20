import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hw1ophr3y.css';
import '../../css/p/pp3v195nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hw1ophr3y"/><circle class="pp3v195nj"/></g>`,
		"fallback": "majesticons:speaker-line",
	});
}

export default Component;
