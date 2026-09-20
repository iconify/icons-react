import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g_14gdcpn {
  d: path("M15 9h7");
}

.ga97lpb2d {
  d: path("M3 5h9v6l-4.5 4.5L3 11Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pdgwdvrql {
  d: path("M15 17h7");
}

.u83rpxb8q {
  d: path("M15 13h7");
}
</style><g class="nrj6p8qat"><path class="ga97lpb2d"/><path class="g_14gdcpn"/><path class="u83rpxb8q"/><path class="pdgwdvrql"/></g>`,
		"fallback": "iconmind:policy-list-outline-regular",
	});
}

export default Component;
