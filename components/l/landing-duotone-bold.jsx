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
		"content": `<style>.eisa2cb9u {
  d: path("M2 22h20");
}

.hmmgrhbhr {
  d: path("M2 5h3V2");
}

.jkfk4gb_o {
  fill: currentColor;
  d: path("m12 3 2 2v4l5.5 5.5H14V17l2 2H8l2 -2v-2.5H4.5L10 9V5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m8ek3-bfo {
  d: path("m12 3 2 2v4l5.5 5.5H14V17l2 2H8l2 -2v-2.5H4.5L10 9V5Z");
}

.o7l5jxuid {
  d: path("m2 2 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jkfk4gb_o"/><path class="m8ek3-bfo"/><path class="eisa2cb9u"/><path class="o7l5jxuid"/><path class="hmmgrhbhr"/></g>`,
		"fallback": "iconmind:landing-duotone-bold",
	});
}

export default Component;
