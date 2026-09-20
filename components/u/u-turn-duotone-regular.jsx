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
		"content": `<style>.avsermgoo {
  d: path("M6 20v-9a6 6 0 0 1 12 0v9");
}

.nhtq22bhv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 17 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.utl7yebdg {
  d: path("m15 17 3 3 3 -3");
}

.we31yybhc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 20v-9a6 6 0 0 1 12 0v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="we31yybhc"/><path class="nhtq22bhv"/><path class="avsermgoo"/><path class="utl7yebdg"/></g>`,
		"fallback": "iconmind:u-turn-duotone-regular",
	});
}

export default Component;
