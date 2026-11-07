import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mm0yq-b-x.css';
import '../../css/r/ryndaxq8c.css';
import '../../css/i/irudeebhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mm0yq-b-x"/><path class="ryndaxq8c"/><path class="irudeebhr"/></g>`,
		"fallback": "solar:speaker-minimalistic-line-duotone",
	});
}

export default Component;
