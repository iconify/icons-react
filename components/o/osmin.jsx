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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rpj147b3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.71 7.93a7.28 7.28 0 0 0-7.28 7.29c0 5.69 5.58 12.56 7 14.24a.43.43 0 0 0 .67 0c1.44-1.69 6.9-8.55 6.9-14.24a7.28 7.28 0 0 0-7.29-7.29m0 10a2.73 2.73 0 1 1 2.72-2.72a2.72 2.72 0 0 1-2.72 2.73Zm6.82-5.28l3.41-1.89M3.77 31.28l20.66-11.4m-4.33 2.39l12.71 21.35");
}
</style><circle class="cpk0fnbgt"/><path class="rpj147b3g"/>`,
		"fallback": "arcticons:osmin",
	});
}

export default Component;
