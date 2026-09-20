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
		"content": `<style>.d8abqfbpc {
  d: path("M3 11h18");
}

.digwvcbca {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fhtr4ivmi {
  d: path("m4 18 6 -6 4 4 6 -6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ux55hnboh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 18 6 -6 4 4 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="digwvcbca"/><path class="ux55hnboh"/><path class="d8abqfbpc"/><path class="fhtr4ivmi"/></g>`,
		"fallback": "iconmind:threshold-duotone-regular",
	});
}

export default Component;
