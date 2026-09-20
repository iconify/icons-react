import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iib_u5vix.css';
import '../../css/e/espirmbhi.css';
import '../../css/o/ogrg-o-wi.css';
import '../../css/s/s_5ru8bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGWCs6ObpT" class="iib_u5vix"/></defs><use href="#SVGWCs6ObpT"/><use href="#SVGWCs6ObpT"/><path clip-rule="evenodd" class="espirmbhi"/><path class="ogrg-o-wi"/><path clip-rule="evenodd" class="s_5ru8bnc"/>`,
		"fallback": "token:lcs",
	});
}

export default Component;
