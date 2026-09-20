import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsd2bnb_a.css';
import '../../css/p/prv9iumsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bsd2bnb_a"/><path class="prv9iumsv"/></g>`,
		"fallback": "tabler:parachute",
	});
}

export default Component;
