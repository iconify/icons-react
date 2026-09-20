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
		"content": `<style>.e5d_yrbyo {
  d: path("M12 13h9");
}

.gsl5knvuq {
  d: path("M15 8h6");
}

.nhri7pb9i {
  d: path("M3 8h9");
}

.q9naw_b2m {
  d: path("M17 18h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xa52mrrsy {
  d: path("M3 13h6");
}

.z82iob5ig {
  d: path("M5 18h9");
}
</style><g class="s0phu2bbs"><path class="nhri7pb9i"/><path class="gsl5knvuq"/><path class="xa52mrrsy"/><path class="e5d_yrbyo"/><path class="z82iob5ig"/><path class="q9naw_b2m"/></g>`,
		"fallback": "iconmind:mist-outline-bold",
	});
}

export default Component;
