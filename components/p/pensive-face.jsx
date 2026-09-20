import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/s/svvrcibjx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="svvrcibjx"/></g>`,
		"fallback": "openmoji:pensive-face",
	});
}

export default Component;
