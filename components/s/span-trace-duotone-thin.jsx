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
		"content": `<style>.am7eiccgy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h50arts9k {
  d: path("M6 12h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i3t090twc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 7h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p7nia1b6j {
  d: path("M3 7h16");
}

.x3jqftbaj {
  d: path("M9 17h12");
}

.z2xx1pboh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="i3t090twc"/><path class="z2xx1pboh"/><path class="am7eiccgy"/><path class="p7nia1b6j"/><path class="h50arts9k"/><path class="x3jqftbaj"/></g>`,
		"fallback": "iconmind:span-trace-duotone-thin",
	});
}

export default Component;
