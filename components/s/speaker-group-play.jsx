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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.liab3db0b {
  d: path("M6 2.5h.5A3.5 3.5 0 0 1 10 6v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V6A3.5 3.5 0 0 1 6 2.5m7 10.573V6q0-.172.017-.343t.05-.34t.084-.333t.115-.323q.066-.159.147-.311t.177-.294q.095-.143.204-.276q.11-.133.231-.255q.122-.121.255-.231q.133-.109.276-.204q.142-.096.294-.177t.311-.147t.323-.115t.333-.084q.169-.033.34-.05T16.5 2.5h.5q.172 0 .343.017t.34.05q.168.034.333.084t.323.115t.311.147t.294.177q.143.095.276.204q.133.11.255.231q.121.122.231.255q.109.133.204.276q.096.142.177.294t.147.311q.065.158.115.323t.084.333q.033.169.05.34T20.5 6v8.042");
}

.tm38g_bza {
  d: path("M5 9.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m10.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0 4.75L21.75 18l-6.25 3.75Z");
}
</style><g class="hntgybcog"><path class="liab3db0b"/><path class="tm38g_bza"/></g>`,
		"fallback": "uix:speaker-group-play",
	});
}

export default Component;
