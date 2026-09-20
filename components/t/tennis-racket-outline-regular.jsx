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
		"content": `<style>.bjcflih-f {
  d: path("M9 5v10");
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.kf3i57zot {
  d: path("M15 5v10");
}

.nb3ovlbtz {
  d: path("M12 3c4 0 7 3 7 7s-3 7 -7 7 -7 -3 -7 -7 3 -7 7 -7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nb3ovlbtz"/><path class="bjcflih-f"/><path class="kf3i57zot"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:tennis-racket-outline-regular",
	});
}

export default Component;
