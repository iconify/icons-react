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

.myjievaxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.717 24.911a11.283 11.283 0 0 1 22.566 0");
}

.n8kzy5bcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.818 25.244c13.06-.475 27.717-.48 42.364 0");
}
</style><path class="n8kzy5bcz"/><path class="myjievaxw"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:twilight",
	});
}

export default Component;
