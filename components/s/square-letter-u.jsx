import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypbg_2eib.css';
import '../../css/a/aqwck0b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ypbg_2eib"/><path class="aqwck0b1m"/></g>`,
		"fallback": "vadivam:square-letter-u",
	});
}

export default Component;
