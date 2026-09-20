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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.v0y09obth {
  d: path("M12 12v4");
}
</style><g class="nrj6p8qat"><path class="ihqwt60-f"/><path class="v0y09obth"/><path class="hclo6jb2r"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:karaoke-outline-regular",
	});
}

export default Component;
