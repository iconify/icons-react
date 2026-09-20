import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kywq0-bbl {
  d: path("M11.402 26.376h12.062c-.215 1.36-.773 3.387-1.28 4.595L3.5 30.97l3.055-3.713V17.03h15.633c.477 1.145 1.032 3.093 1.258 4.373");
}

.m2mjocb9v {
  d: path("M11.402 21.402h12.044c.062.623.093 1.97.093 2.597c0 .555-.024 1.827-.075 2.377");
}

.y_qw0b2wr {
  d: path("M22.676 17.029h6.795l4.117 4.324l4.117-4.324H44.5L37.502 24l6.998 6.971h-6.795l-4.117-4.324l-4.117 4.324h-6.795L29.674 24z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="m2mjocb9v"/><path class="kywq0-bbl"/><path class="y_qw0b2wr"/></g>`,
		"fallback": "arcticons:pokemon-masters-ex-alt-1",
	});
}

export default Component;
