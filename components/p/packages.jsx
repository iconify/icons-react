import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tqk0q2bti.css';
import '../../css/c/cz8q02aql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tqk0q2bti"/><path class="cz8q02aql"/></g>`,
		"fallback": "tabler:packages",
	});
}

export default Component;
