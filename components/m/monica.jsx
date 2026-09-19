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

.qqtuubt8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 24c0 7.906-7.385 14.315-16.495 14.315c-9.11.005-16.499-6.4-16.505-14.306V24c0-7.906 7.385-14.314 16.495-14.314h.007c9.11-.002 16.496 6.405 16.498 14.31zm-7.437-2.75l-4.009 4.04l5.232 3.235M16.68 20.988V28.8");
}
</style><path class="qqtuubt8l"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:monica",
	});
}

export default Component;
