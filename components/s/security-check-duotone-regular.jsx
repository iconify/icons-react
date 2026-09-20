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
		"content": `<style>.bnumaib7z {
  d: path("M9 13h6v6H9Z");
}

.e9b6zqbrn {
  fill: currentColor;
  d: path("M9 13h6v6H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m3rd84bde {
  d: path("M4 21V8l4 -4h8l4 4v13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e9b6zqbrn"/><path class="m3rd84bde"/><path class="bnumaib7z"/></g>`,
		"fallback": "iconmind:security-check-duotone-regular",
	});
}

export default Component;
