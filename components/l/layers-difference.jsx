import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v9c-14bbe.css';
import '../../css/h/h58mmjb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v9c-14bbe"/><path class="h58mmjb6r"/></g>`,
		"fallback": "tabler:layers-difference",
	});
}

export default Component;
