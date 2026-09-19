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
		"content": `<style>.u9colsb9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.486 33.897h14.13c10.305.214 14.499-12.861 2.47-16.296c0-9.235-8.167-9.449-12.243-5.373C20.767 8.152 8.5 6.94 8.311 20.468");
}

.v0p4usb0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.235 34.518c5.769.059 10.259-3.524 10.029-8.002S21.171 18.36 15.403 18.3c-5.77-.058-10.26 3.525-10.03 8.003c.144 2.8 2.138 5.42 5.275 6.932l-.692 4.882z");
}
</style><path class="v0p4usb0s"/><path class="u9colsb9j"/>`,
		"fallback": "arcticons:schulcloud",
	});
}

export default Component;
