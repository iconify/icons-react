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
		"content": `<style>.cuxr_fxyo {
  d: path("M18 21.5v-3.75c-2.75 0-3.5-1.75-3.5-3.25c2.5 0 3.5 1.5 3.5 3.25C18 15.5 19.5 14 21.5 14c0 2-1.5 3.5-3.5 3.75");
}

.evcvyhbsn {
  d: path("M13.115 18.5H6q-.172 0-.343-.017t-.34-.05t-.333-.084t-.323-.115q-.159-.066-.311-.147t-.294-.177q-.143-.095-.276-.204q-.133-.11-.255-.231q-.121-.122-.231-.255q-.109-.133-.204-.276q-.096-.142-.177-.294t-.147-.311t-.115-.323t-.084-.333q-.033-.169-.05-.34T2.5 15V7q0-.172.017-.343t.05-.34t.084-.333t.115-.323q.066-.159.147-.311t.177-.294q.095-.143.204-.276q.11-.133.231-.255q.122-.121.255-.231q.133-.109.276-.204q.142-.096.294-.177t.311-.147q.158-.065.323-.115t.333-.084t.34-.05T6 3.5h8q.172 0 .343.017t.34.05q.168.034.333.084t.323.115q.159.066.311.147t.294.177q.143.095.276.204q.133.11.255.231q.121.122.231.255q.109.133.204.276q.096.142.177.294t.147.311q.065.158.115.323t.084.333q.033.169.05.34T17.5 7v5.142M2.5 8h15M7 2v3m6-3v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="evcvyhbsn"/><path class="cuxr_fxyo"/></g>`,
		"fallback": "uix:seed-calendar",
	});
}

export default Component;
