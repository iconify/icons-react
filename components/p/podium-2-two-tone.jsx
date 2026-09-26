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
		"content": `<style>.bvzj4mazs {
  d: path("M2 22H22M4 22V18.5H9V15H14V11.5H20V22H4ZM15.3 3.4C15.3 2.3 16.116 2 17 2C17.884 2 18.7 2.5 18.7 3.5C18.7 4.9 15.3 6.3 15.3 7H18.7");
}

.f8dypr8nz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 22V18.5H9V15H14V11.5H20V22H4Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="f8dypr8nz"/><path class="bvzj4mazs"/></g>`,
		"fallback": "keyline-icons:podium-2-two-tone",
	});
}

export default Component;
