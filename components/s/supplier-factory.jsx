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
		"content": `<style>.b3bmbtlri {
  width: 4.5px;
  height: 5.5px;
  x: 16.75px;
  y: 15.75px;
  rx: 0.75px;
}

.f22r25bau {
  d: path("M19 15.75v1.75");
}

.hmv0l1b6e {
  d: path("M2.75 20.25V11.4a.5.5 0 0 1 .76-.43l3.62 2.28V11.4a.5.5 0 0 1 .76-.43l3.61 2.28v-9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1m2.25-3h2m2.25 0h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hmv0l1b6e"/><rect class="b3bmbtlri"/><path class="f22r25bau"/></g>`,
		"fallback": "iconoven:supplier-factory",
	});
}

export default Component;
