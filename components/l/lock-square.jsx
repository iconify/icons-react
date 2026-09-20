import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1g8ht9pf.css';
import '../../css/p/pi8645b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l1g8ht9pf"/><path class="pi8645b3h"/></g>`,
		"fallback": "tabler:lock-square",
	});
}

export default Component;
