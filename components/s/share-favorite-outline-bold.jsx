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
		"content": `<style>.eud-3ptuk {
  d: path("M15 12h7");
}

.lkje5bbsk {
  d: path("M2 9a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0l-5 5Z");
}

.owdk3hf1a {
  d: path("m18 8 4 4 -4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="lkje5bbsk"/><path class="eud-3ptuk"/><path class="owdk3hf1a"/></g>`,
		"fallback": "iconmind:share-favorite-outline-bold",
	});
}

export default Component;
