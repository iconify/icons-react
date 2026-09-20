import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qc8bz2e6u.css';
import '../../css/u/uu_5xzlli.css';
import '../../css/j/jgg0ex4bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qc8bz2e6u"/><path class="uu_5xzlli"/><path class="jgg0ex4bb"/></g>`,
		"fallback": "tabler:masks-theater",
	});
}

export default Component;
