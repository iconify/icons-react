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
		"content": `<style>.fev0a_0al {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 13v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsnj9o-9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.m6nkjhiin {
  d: path("M12 13v3");
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.tzxtpfb7v {
  fill: currentColor;
  d: path("M10 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u0jypcc9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zohykibek {
  d: path("M10 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="tzxtpfb7v"/><path class="u0jypcc9y"/><path class="fev0a_0al"/><path class="hsnj9o-9y"/><path class="srzgk7jml"/><path class="zohykibek"/><path class="m6nkjhiin"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:vpn-duotone-thin",
	});
}

export default Component;
