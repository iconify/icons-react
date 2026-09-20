import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j096plb9y.css';
import '../../css/n/nhrqm3bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j096plb9y"/><path class="nhrqm3bvg"/></g>`,
		"fallback": "tabler:square-rounded-letter-a",
	});
}

export default Component;
