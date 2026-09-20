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
		"content": `<style>.dq5olwsrs {
  d: path("m21.5 18.5 -3 3");
}

.encdkxb_m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m21.5 5.5 -16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g_uiugb1x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m21.5 12.5 -9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.htx64eiti {
  d: path("m21.5 5.5 -16 16");
}

.j0xsopbwy {
  d: path("m21.5 12.5 -9 9");
}

.jx94tacen {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m21.5 18.5 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="encdkxb_m"/><path class="g_uiugb1x"/><path class="jx94tacen"/><path class="htx64eiti"/><path class="j0xsopbwy"/><path class="dq5olwsrs"/></g>`,
		"fallback": "iconmind:resize-handle-duotone-thin",
	});
}

export default Component;
