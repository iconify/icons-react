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

.iwembvn_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.005 35.5h15.99m-10.441-23a112 112 0 0 1 8.908 9.456s-6.864 7.885-8.616 9.09");
}
</style><path class="iwembvn_s"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:marktplaats",
	});
}

export default Component;
