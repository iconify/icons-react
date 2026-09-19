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
		"content": `<style>.dx8p4y3bt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.527 26.569q.156 6.1 1.055 12.201a3.14 3.14 0 0 0 2.642 2.642a100.8 100.8 0 0 0 29.54 0a3.14 3.14 0 0 0 2.642-2.642c.17-1.149.315-2.298.445-3.447h-3.843v-8.755h4.439c.054-2.114.02-4.23-.057-6.344h-4.382V12.43h3.799c-.123-1.066-.244-2.133-.4-3.2a3.14 3.14 0 0 0-2.643-2.641a100.8 100.8 0 0 0-29.54 0A3.14 3.14 0 0 0 6.582 9.23a103 103 0 0 0-.42 3.2h4.623z");
}

.v-9ufac1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.081 11.686l16.473 11.22a.95.95 0 0 1-.005 1.576L20.08 35.535m9.823-6.592v13.386m0-23.953V5.701");
}

.wvna0bblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.483 23.021l-6.029-4.736c-.83-.652-2.045-.06-2.045.994v8.838c0 1.055 1.216 1.646 2.045.995l6.03-4.737a.86.86 0 0 0 0-1.354M20.073 5.573l.008 6.113l-9.296 23.849h9.296v6.888");
}
</style><path class="wvna0bblr"/><path class="v-9ufac1m"/><path class="dx8p4y3bt"/>`,
		"fallback": "arcticons:nlziet",
	});
}

export default Component;
