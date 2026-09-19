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
		"content": `<style>.i2pagioya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.25 23.61a7.25 7.25 0 1 0 13.38 3.87c4.13-.91 4.58-6.54 7-8c1.85-1.15 3.44-2.11 4.48-2.73a1.3 1.3 0 0 0 .24-2a7.2 7.2 0 0 0-2-1.43");
}

.ja0dgxbdu {
  cx: 36.25px;
  cy: 27.48px;
  r: 7.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p-mvelbse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.66 24c-1.66-1.14-2.14-6.87-5.15-8.68S8.22 13.08 4.5 14a33 33 0 0 1 2.64 2.19l-1 1.05a5 5 0 0 0 2.48 1.53c-.43 2 2.57 6.62 8.15 6.62c3.84-.01 4.89-1.39 4.89-1.39");
}
</style><circle class="ja0dgxbdu"/><path class="i2pagioya"/><path class="p-mvelbse"/>`,
		"fallback": "arcticons:nextbike",
	});
}

export default Component;
