import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekxdc3dbe.css';
import '../../css/m/mh91eivaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ekxdc3dbe"/><path class="mh91eivaq"/></g>`,
		"fallback": "tabler:prism-off",
	});
}

export default Component;
