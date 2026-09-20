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
		"content": `<style>.amqvwsm7z {
  d: path("M3.5 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.j6affxbcq {
  d: path("M16.5 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nl66y9men {
  d: path("M6 16h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zohykibek {
  d: path("M10 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="okud9xj_d"/><path class="amqvwsm7z"/><path class="zohykibek"/><path class="j6affxbcq"/><path class="nl66y9men"/></g>`,
		"fallback": "iconmind:statefulset-outline-regular",
	});
}

export default Component;
