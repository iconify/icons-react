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
		"content": `<style>.dv6re0b-t {
  d: path("M12 16V8");
}

.emyboub8n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ezum2i4ey {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 16V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ogqckebrf {
  d: path("m9 11 3 -3 3 3");
}

.rwjci8tle {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 11 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tbe304aqf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="nrj6p8qat"><path class="emyboub8n"/><path class="tbe304aqf"/><path class="ezum2i4ey"/><path class="rwjci8tle"/><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="dv6re0b-t"/><path class="ogqckebrf"/></g>`,
		"fallback": "iconmind:recovery-score-duotone-regular",
	});
}

export default Component;
