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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o48nut9qz {
  fill: currentColor;
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.omcxz1ygw {
  fill: currentColor;
  d: path("M16 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q_-097bpf {
  d: path("M4 20a8 8 0 0 1 16 0");
}

.rdx5t34om {
  d: path("M16 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.uk0rveqaj {
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.vjmstjega {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20a8 8 0 0 1 16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="o48nut9qz"/><path class="omcxz1ygw"/><path class="vjmstjega"/><path class="uk0rveqaj"/><path class="rdx5t34om"/><path class="q_-097bpf"/></g>`,
		"fallback": "iconmind:mood-sad-duotone-regular",
	});
}

export default Component;
