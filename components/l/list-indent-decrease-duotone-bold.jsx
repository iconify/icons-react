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
		"content": `<style>.h2sq3fbpa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jb9_5vb3r {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5.5 9.5 3 12l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.khksl7boy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qw0jhccmr {
  d: path("M5.5 9.5 3 12l2.5 2.5");
}

.ro60yubdh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tee3b-ble {
  d: path("M10 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="s0phu2bbs"><path class="khksl7boy"/><path class="ro60yubdh"/><path class="h2sq3fbpa"/><path class="jb9_5vb3r"/><path class="xgrfb-bqu"/><path class="tee3b-ble"/><path class="xyj-l9cjp"/><path class="qw0jhccmr"/></g>`,
		"fallback": "iconmind:list-indent-decrease-duotone-bold",
	});
}

export default Component;
