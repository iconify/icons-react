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
		"content": `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.esolkqbpc {
  fill: currentColor;
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqw_13bxd {
  d: path("m15 17 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.s6yzsme1j {
  fill: currentColor;
  d: path("m15 17 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xvrtzwm1e {
  fill: currentColor;
  d: path("m9 17 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yar83jxfe {
  d: path("m9 17 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}
</style><g class="nrj6p8qat"><path class="esolkqbpc"/><path class="xvrtzwm1e"/><path class="s6yzsme1j"/><path class="c-pcdbceg"/><path class="yar83jxfe"/><path class="oqw_13bxd"/></g>`,
		"fallback": "iconmind:light-rain-duotone-regular",
	});
}

export default Component;
