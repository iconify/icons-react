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

.zqrikt46n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.789 23.905h-19.22m-2.072 2.074v2.979m21.292-5.053a4.86 4.86 0 1 1 1.032 2.998M13.34 24.379v4.375m-2.771-4.849a1.892 1.892 0 0 0-2.071 2.074");
}
</style><path class="zqrikt46n"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:nemid",
	});
}

export default Component;
