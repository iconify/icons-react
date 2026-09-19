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
		"content": `<style>.oxib5lbpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.413 24L24 31.167L11.587 24v-7.167L24 9.667l18.62 10.75V34.75L24 45.5L5.38 34.75v-7.167");
}

.qhsutvi_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.587 24L24 16.833L36.413 24v7.167L24 38.333L5.38 27.583V13.25L24 2.5l18.62 10.75v7.167");
}
</style><path class="oxib5lbpd"/><path class="qhsutvi_d"/>`,
		"fallback": "arcticons:warzone-loadout-codmunity",
	});
}

export default Component;
