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

.ilm_1ybiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.823 29.359L13.048 5.495M10.43 40.677l34.393-11.319m-38.839 6.38l38.84-6.38l-42.02-1.734m.822-10.509l41.198 12.243l-36.77-19.78");
}
</style><circle class="cpk0fnbgt"/><path class="ilm_1ybiz"/>`,
		"fallback": "arcticons:openlp",
	});
}

export default Component;
