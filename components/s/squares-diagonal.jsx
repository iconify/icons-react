import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fj4vv-22r.css';
import '../../css/b/bwa6r8b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fj4vv-22r"/><path class="bwa6r8b7t"/></g>`,
		"fallback": "tabler:squares-diagonal",
	});
}

export default Component;
