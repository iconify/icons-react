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
		"content": `<style>.fd7q-d8sx {
  d: path("M6.5 6.5 11 11");
}

.flhmwp83q {
  d: path("M17.5 6.5 13 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ly7sc7y4x {
  d: path("M12 5v7");
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
</style><g class="hntgybcog"><path class="m8c8atiya"/><path class="n0n63pb2v"/><path class="ly7sc7y4x"/><path class="fd7q-d8sx"/><path class="flhmwp83q"/></g>`,
		"fallback": "iconmind:otel-collector-duotone-thin",
	});
}

export default Component;
