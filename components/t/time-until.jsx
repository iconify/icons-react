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
		"content": `<style>.psafdqbvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.6 4.5v2.373l10.092 17.22L11.6 41.356V43.5h24.8v-2.172L26.398 24.093L36.4 6.921V4.5z");
}
</style><path class="psafdqbvc"/>`,
		"fallback": "arcticons:time-until",
	});
}

export default Component;
