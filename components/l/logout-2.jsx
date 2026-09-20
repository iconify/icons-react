import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsvm6k4ya.css';
import '../../css/w/w6qw6tbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bsvm6k4ya"/><path class="w6qw6tbkb"/></g>`,
		"fallback": "tabler:logout-2",
	});
}

export default Component;
