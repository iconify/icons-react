import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/npgigsivs.css';
import '../../css/w/wnpkb0yso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="npgigsivs"/><path class="wnpkb0yso"/></g>`,
		"fallback": "tabler:square-f",
	});
}

export default Component;
