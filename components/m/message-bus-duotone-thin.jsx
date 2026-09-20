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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.l0prsfboz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 9.5V16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o48nut9qz {
  fill: currentColor;
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.omcxz1ygw {
  fill: currentColor;
  d: path("M16 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ouxnpr-kh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 9.5V16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r09np9bwl {
  d: path("M6 9.5V16");
}

.rdx5t34om {
  d: path("M16 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rj62dp6ok {
  d: path("M18 9.5V16");
}

.rsu8hn7ln {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 16h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uk0rveqaj {
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="o48nut9qz"/><path class="omcxz1ygw"/><path class="rsu8hn7ln"/><path class="ouxnpr-kh"/><path class="l0prsfboz"/><path class="ils7yp4cg"/><path class="uk0rveqaj"/><path class="rdx5t34om"/><path class="r09np9bwl"/><path class="rj62dp6ok"/></g>`,
		"fallback": "iconmind:message-bus-duotone-thin",
	});
}

export default Component;
