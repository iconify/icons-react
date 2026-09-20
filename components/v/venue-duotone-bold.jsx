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
		"content": `<style>.b7l_epb8y {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 6v13h14V6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c9rn6abot {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 11h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fewd_qbim {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 11v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6x6uv-ap {
  d: path("M12 11v8");
}

.khksl7boy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vjqs2ebif {
  d: path("M5 6v13h14V6");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="s0phu2bbs"><path class="khksl7boy"/><path class="b7l_epb8y"/><path class="fewd_qbim"/><path class="c9rn6abot"/><path class="xgrfb-bqu"/><path class="vjqs2ebif"/><path class="k6x6uv-ap"/><path class="s09hy0b0y"/></g>`,
		"fallback": "iconmind:venue-duotone-bold",
	});
}

export default Component;
