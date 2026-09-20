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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.bq9mex9td {
  fill: currentColor;
  d: path("M2 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ctc9ejfah {
  d: path("m8 10 5 5");
}

.neabk9byu {
  d: path("M2 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ycakidrmo {
  d: path("m13 15 4 -4 4 4");
}
</style><g class="nrj6p8qat"><path class="bq9mex9td"/><path class="neabk9byu"/><path class="ctc9ejfah"/><path class="ycakidrmo"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:sit-up-duotone-regular",
	});
}

export default Component;
