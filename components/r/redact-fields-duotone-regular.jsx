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
		"content": `<style>.k6nj2fbya {
  d: path("M3 5h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.rm-a2rb5c {
  fill: currentColor;
  d: path("M6 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tjijmrbpe {
  d: path("M6 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2");
}
</style><g class="nrj6p8qat"><path class="rm-a2rb5c"/><path class="k6nj2fbya"/><path class="tjijmrbpe"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:redact-fields-duotone-regular",
	});
}

export default Component;
