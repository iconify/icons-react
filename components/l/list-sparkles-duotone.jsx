import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/snc70lbwe.css';
import '../../css/t/t82mss_so.css';
import '../../css/t/t6v_1pm6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="snc70lbwe"/><path class="t82mss_so"/><path class="t6v_1pm6y"/></g>`,
		"fallback": "keyline-icons:list-sparkles-duotone",
	});
}

export default Component;
