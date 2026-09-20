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
		"content": `<style>.g0fpbbc_s {
  d: path("M18 11h3");
}

.g54o33why {
  d: path("M3 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2");
}

.j64debr6q {
  fill: currentColor;
  d: path("M3 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pt0xyi7kd {
  d: path("M3 17h10");
}
</style><g class="nrj6p8qat"><path class="j64debr6q"/><path class="k6nj2fbya"/><path class="g54o33why"/><path class="g0fpbbc_s"/><path class="pt0xyi7kd"/></g>`,
		"fallback": "iconmind:pii-redact-duotone-regular",
	});
}

export default Component;
