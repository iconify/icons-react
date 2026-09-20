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
		"content": `<style>.c7p9d-b6q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 15h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.md3qg6xkk {
  d: path("M4 6v12");
}

.mzjqjtrpb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 9h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.ra6o68b-z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wvee1b7zr {
  d: path("M8 15h12");
}
</style><g class="hntgybcog"><path class="ra6o68b-z"/><path class="mzjqjtrpb"/><path class="c7p9d-b6q"/><path class="md3qg6xkk"/><path class="pty_wsbvs"/><path class="wvee1b7zr"/></g>`,
		"fallback": "iconmind:type-action-duotone-thin",
	});
}

export default Component;
