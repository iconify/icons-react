import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bpg1mqbyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.063 24.201H34.31M24.17 44.5l10.212-20.308L24.244 3.5L13.618 24.18z");
}

.i6fz-9bqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.353 4.016L19.95 24.089l4.274 19.555");
}

.ye-r__5im {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.207 4.016l4.403 20.073l-4.274 19.555");
}
</style><path class="bpg1mqbyn"/><path class="ye-r__5im"/><path class="i6fz-9bqr"/>`,
		"fallback": "arcticons:sims-freeplay",
	});
}

export default Component;
