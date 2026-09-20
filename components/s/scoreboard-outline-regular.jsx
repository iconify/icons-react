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
		"content": `<style>.di4vjgyye {
  d: path("M5 12h5");
}

.fopjp5vkk {
  d: path("M5 8h5");
}

.g4h6r4ykz {
  d: path("M12 4v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r35682biw {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.vhf3_kexp {
  d: path("M12 16v5");
}

.xwm0hzbem {
  d: path("M14 10h5");
}
</style><g class="nrj6p8qat"><path class="r35682biw"/><path class="g4h6r4ykz"/><path class="fopjp5vkk"/><path class="di4vjgyye"/><path class="xwm0hzbem"/><path class="vhf3_kexp"/></g>`,
		"fallback": "iconmind:scoreboard-outline-regular",
	});
}

export default Component;
