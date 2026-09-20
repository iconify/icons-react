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
		"content": `<style>.ftevlq8wy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 17h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hx31bvbvo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 11h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.io3u6zbek {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 17h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k187sabpz {
  d: path("M2 11h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o0r0bcbwx {
  d: path("m16 6 2 2 4 -4");
}

.pdgwdvrql {
  d: path("M15 17h7");
}

.pv95aqbot {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 6 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yaok4e85l {
  d: path("M2 17h9");
}
</style><g class="nrj6p8qat"><path class="hx31bvbvo"/><path class="ftevlq8wy"/><path class="io3u6zbek"/><path class="pv95aqbot"/><path class="k187sabpz"/><path class="yaok4e85l"/><path class="pdgwdvrql"/><path class="o0r0bcbwx"/></g>`,
		"fallback": "iconmind:uptime-duotone-regular",
	});
}

export default Component;
