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
		"content": `<style>.cmb7dmbhv {
  d: path("M10 3v11");
}

.crh41zgek {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 14a6 6 0 0 1 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ek6w2ymjs {
  d: path("M6 3v11");
}

.hh2-r7bhw {
  d: path("M14 14a2 2 0 0 1 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i523cabkd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 14a2 2 0 0 1 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jo2qgdb_s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.olqp5-9mh {
  d: path("M14 3v11");
}

.qj7cj8bka {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qvbsohboi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s6jmbp3oh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 3v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sa7t2q-eb {
  d: path("M18 14a6 6 0 0 1 -12 0");
}

.w7htkxb5b {
  d: path("M18 3v11");
}
</style><g class="hntgybcog"><path class="crh41zgek"/><path class="jo2qgdb_s"/><path class="qj7cj8bka"/><path class="i523cabkd"/><path class="qvbsohboi"/><path class="s6jmbp3oh"/><path class="sa7t2q-eb"/><path class="ek6w2ymjs"/><path class="w7htkxb5b"/><path class="hh2-r7bhw"/><path class="cmb7dmbhv"/><path class="olqp5-9mh"/></g>`,
		"fallback": "iconmind:magnet-snap-duotone-thin",
	});
}

export default Component;
