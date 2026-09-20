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
		"content": `<style>.mwue9wb_t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 9h14v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pzovgl99o {
  d: path("M8 4 3 9l5 5");
}

.q5w-xob0a {
  d: path("M3 9h14v11");
}

.wrw2kc1sb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 4 3 9l5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wrw2kc1sb"/><path class="mwue9wb_t"/><path class="pzovgl99o"/><path class="q5w-xob0a"/></g>`,
		"fallback": "iconmind:reply-duotone-regular",
	});
}

export default Component;
