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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.gtlfk7rgu {
  fill: currentColor;
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m6r9k7-tj {
  d: path("M8 14.5h8");
}

.q28cmybwy {
  d: path("M13.5 10v4.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xy8m-mq7h {
  d: path("m9 14.5 4.5 -4.5");
}
</style><g class="s0phu2bbs"><path class="gtlfk7rgu"/><path class="b5ic9acln"/><path class="m6r9k7-tj"/><path class="xy8m-mq7h"/><path class="q28cmybwy"/></g>`,
		"fallback": "iconmind:similarity-dot-duotone-bold",
	});
}

export default Component;
