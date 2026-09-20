import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k08r_06rn.css';
import '../../css/r/ro61si5hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k08r_06rn"/><path class="ro61si5hh"/></g>`,
		"fallback": "vadivam:settings",
	});
}

export default Component;
