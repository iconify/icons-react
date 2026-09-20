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
		"content": `<style>.e4p-cfbpy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 8h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gb7yzvvzz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gnfxbib2f {
  d: path("M6 8h13");
}

.mfz05qbtx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 13h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nyl8f3o_r {
  d: path("M6 13h13");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="nrj6p8qat"><path class="gb7yzvvzz"/><path class="e4p-cfbpy"/><path class="mfz05qbtx"/><path class="qe97cg-lx"/><path class="gnfxbib2f"/><path class="nyl8f3o_r"/></g>`,
		"fallback": "iconmind:underfit-gap-duotone-regular",
	});
}

export default Component;
