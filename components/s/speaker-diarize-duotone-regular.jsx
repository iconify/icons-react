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
		"content": `<style>.b8oyt1acb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.19 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eah0r8b_w {
  d: path("M19.19 3.37a4 4 0 1 1 -3.38 0");
}

.nbsfmkbol {
  d: path("M8.19 3.37a4 4 0 1 1 -3.38 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.swjslgtot {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 17 3 -3 3 3 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vcs-8qbba {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19.19 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x2b10gplf {
  d: path("m3 17 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="nrj6p8qat"><path class="b8oyt1acb"/><path class="vcs-8qbba"/><path class="swjslgtot"/><path class="nbsfmkbol"/><path class="eah0r8b_w"/><path class="x2b10gplf"/></g>`,
		"fallback": "iconmind:speaker-diarize-duotone-regular",
	});
}

export default Component;
