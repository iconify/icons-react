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

.tdlvrpbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.017 30.247C19.998 31.524 21.228 32 22.94 32h2.369a3.99 3.99 0 0 0 3.991-3.991v-.018A3.99 3.99 0 0 0 25.31 24h-2.613a3.996 3.996 0 0 1-3.996-3.996h0A4.004 4.004 0 0 1 22.704 16h2.356c1.712 0 2.942.476 3.923 1.753");
}
</style><circle class="cpk0fnbgt"/><path class="tdlvrpbgt"/>`,
		"fallback": "arcticons:letter-uppercase-circle-s",
	});
}

export default Component;
