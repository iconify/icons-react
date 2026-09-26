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
		"content": `<style>.ayo73pbzj {
  d: path("M2 2L22 22");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pists6bnz {
  stroke-opacity: 0.4;
  d: path("M8.6569 3L15 3L21 9L21 15.3431M15 3L15 6C15 7.6569 16.3431 9 18 9L21 9");
}

.xp2l4acuz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22L6 22C3.7909 22 2 20.2091 2 18L2 6C2 4.9391 2.4214 3.9217 3.1716 3.1716L20.8284 20.8284Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="xp2l4acuz"/><path class="pists6bnz"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:sticky-note-off-duotone",
	});
}

export default Component;
