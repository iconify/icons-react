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
		"content": `<style>.hclo6jb2r {
  d: path("M8 16h8");
}

.ihqwt60-f {
  d: path("M9 6a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
}

.ixk-j3bwf {
  fill: currentColor;
  d: path("M9 6a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v0y09obth {
  d: path("M12 12v4");
}
</style><g class="s0phu2bbs"><path class="ixk-j3bwf"/><path class="ihqwt60-f"/><path class="v0y09obth"/><path class="hclo6jb2r"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:karaoke-duotone-bold",
	});
}

export default Component;
