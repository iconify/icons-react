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
		"content": `<style>.k6x1rnb3p {
  fill: currentColor;
  d: path("m16 11 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.re2g2xb7o {
  d: path("m16 11 2 2 -2 2 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wg8_ddc1f {
  d: path("M6 12h6");
}

.zwh7a2bjz {
  d: path("M6 9h9");
}
</style><g class="s0phu2bbs"><path class="k6x1rnb3p"/><path class="ky4omnbla"/><path class="zwh7a2bjz"/><path class="wg8_ddc1f"/><path class="re2g2xb7o"/></g>`,
		"fallback": "iconmind:share-certificate-duotone-bold",
	});
}

export default Component;
