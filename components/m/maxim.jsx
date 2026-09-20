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
		"content": `<style>.bv6ysjbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.851 22.023v4.816m-9.491-4.816za2.41 2.41 0 0 1 2.408 2.408v2.408h-2.409a2.41 2.41 0 0 1 0-4.816");
}

.c4r2858tq {
  cx: 29.851px;
  cy: 19.797px;
  r: 0.75px;
  fill: currentColor;
}

.e1zndlb6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9 26.84v-3a1.817 1.817 0 0 1 3.635 0v3m0-3a1.817 1.817 0 0 1 3.635 0v3m15.46 0v-3a1.817 1.817 0 0 1 3.635 0v3m0-3a1.817 1.817 0 0 1 3.635 0v3");
}

.v3nr5b3-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M27.996 22.023l-3.635 4.816m3.635 0l-3.635-4.816");
}
</style><path class="v3nr5b3-m"/><path class="e1zndlb6u"/><circle class="c4r2858tq"/><path class="bv6ysjbtg"/>`,
		"fallback": "arcticons:maxim",
	});
}

export default Component;
