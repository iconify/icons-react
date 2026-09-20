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
		"content": `<style>.k0hssvbpp {
  d: path("M15 3v3");
}

.kk7ikrv4o {
  fill: currentColor;
  d: path("M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
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

.oi1r4kf5x {
  d: path("M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.pdlat6brq {
  d: path("M9 3v3");
}

.x0i5t1jky {
  d: path("M12 14v4h5v3");
}
</style><g class="nrj6p8qat"><path class="kk7ikrv4o"/><path class="oi1r4kf5x"/><path class="pdlat6brq"/><path class="k0hssvbpp"/><path class="x0i5t1jky"/></g>`,
		"fallback": "iconmind:travel-charger-duotone-regular",
	});
}

export default Component;
