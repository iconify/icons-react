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
		"content": `<style>.eg6l_ib9x {
  d: path("m4.5 20.5l5.5-12l2.666 5.818M5 3.5a5.5 5.5 0 0 0 0 7m10-7a5.5 5.5 0 0 1 0 7m2.284 4.334za.58.58 0 0 1 .579-.525h.274a.58.58 0 0 1 .579.525a1.03 1.03 0 0 0 .508.789l.223.128a1.03 1.03 0 0 0 .937.046a.58.58 0 0 1 .744.239l.137.237a.58.58 0 0 1-.166.764a1.03 1.03 0 0 0-.428.835v.256a1.03 1.03 0 0 0 .428.835a.58.58 0 0 1 .166.764l-.137.237a.58.58 0 0 1-.744.239a1.03 1.03 0 0 0-.937.046l-.223.128a1.03 1.03 0 0 0-.508.789a.58.58 0 0 1-.579.525h-.274a.58.58 0 0 1-.579-.525a1.03 1.03 0 0 0-.508-.789l-.223-.128a1.03 1.03 0 0 0-.937-.046a.58.58 0 0 1-.744-.239l-.137-.237a.58.58 0 0 1 .166-.764a1.03 1.03 0 0 0 .428-.835v-.256a1.03 1.03 0 0 0-.428-.835a.58.58 0 0 1-.166-.764l.137-.237a.58.58 0 0 1 .744-.239a1.03 1.03 0 0 0 .937-.046l.223-.128a1.03 1.03 0 0 0 .508-.789");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sktdweb3c {
  d: path("M8.5 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="sktdweb3c"/><path class="eg6l_ib9x"/></g>`,
		"fallback": "uix:radio-station-settings",
	});
}

export default Component;
