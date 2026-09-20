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
		"content": `<style>.c08_j9b_a {
  d: path("m19.5 11.5 -3 3");
}

.kuui-zbsa {
  d: path("m16.5 11.5 3 3");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x3ookvx2e {
  d: path("m7 17 4 -4h3");
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="x3ookvx2e"/><path class="kuui-zbsa"/><path class="c08_j9b_a"/></g>`,
		"fallback": "iconmind:staleness-marker-outline-bold",
	});
}

export default Component;
