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
		"content": `<style>.l2oprob0y {
  d: path("M17 5v6");
}

.m8c8atiya {
  fill: currentColor;
  d: path("M4 15v4h16v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qr1iqpomq {
  d: path("M9 8h6");
}

.ylrudh6bl {
  d: path("M7 5v6");
}
</style><g class="nrj6p8qat"><path class="m8c8atiya"/><path class="n0n63pb2v"/><path class="ylrudh6bl"/><path class="l2oprob0y"/><path class="qr1iqpomq"/></g>`,
		"fallback": "iconmind:memory-quota-duotone-regular",
	});
}

export default Component;
