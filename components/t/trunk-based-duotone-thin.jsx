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
		"content": `<style>.g6n49udox {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h2-2dgnfu {
  d: path("M12 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7gli2e_k {
  d: path("M16.5 12.5 12 17");
}

.o2vo1kuyi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7.5 6.5 12 11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pt_3dnb5z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16.5 12.5 12 17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.srofgib5x {
  d: path("M7.5 6.5 12 11");
}
</style><g class="hntgybcog"><path class="g6n49udox"/><path class="o2vo1kuyi"/><path class="pt_3dnb5z"/><path class="h2-2dgnfu"/><path class="srofgib5x"/><path class="m7gli2e_k"/></g>`,
		"fallback": "iconmind:trunk-based-duotone-thin",
	});
}

export default Component;
