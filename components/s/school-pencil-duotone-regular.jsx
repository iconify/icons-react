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
		"content": `<style>.iq9in6bpg {
  d: path("m7 16 -3 3h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rxedw8b6o {
  d: path("m7 16 9 -9 3 3 -9 9Z");
}

.vizcuby0h {
  fill: currentColor;
  d: path("m7 16 9 -9 3 3 -9 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wsj78vmsl {
  d: path("m14 9 3 3");
}
</style><g class="nrj6p8qat"><path class="vizcuby0h"/><path class="rxedw8b6o"/><path class="iq9in6bpg"/><path class="wsj78vmsl"/></g>`,
		"fallback": "iconmind:school-pencil-duotone-regular",
	});
}

export default Component;
