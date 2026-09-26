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
		"content": `<style>.f8dypr8nz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 22V18.5H9V15H14V11.5H20V22H4Z");
  stroke: none;
}

.h_vhetbrl {
  d: path("M2 22H22M4 22V18.5H9V15H14V11.5H20V22H4ZM16.1 3.3L17.5 2V7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="f8dypr8nz"/><path class="h_vhetbrl"/></g>`,
		"fallback": "keyline-icons:podium-1-two-tone",
	});
}

export default Component;
