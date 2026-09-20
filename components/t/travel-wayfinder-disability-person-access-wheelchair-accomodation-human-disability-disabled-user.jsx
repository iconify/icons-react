import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/prb3nzbki.css';
import '../../css/b/bsjvgwb6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="prb3nzbki"/><path class="bsjvgwb6j"/></g>`,
		"fallback": "streamline:travel-wayfinder-disability-person-access-wheelchair-accomodation-human-disability-disabled-user",
	});
}

export default Component;
