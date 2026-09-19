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
		"content": `<style>.k_3sr2hrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.557 16.032L22.638 5.696L12.079 42.5l9.041-5.735m5.407-3.43l15.154-9.613l-5.398-5.109");
}

.ofvutzbjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.362 15.424L16.879 5.5L6.319 42.304l29.602-18.778l-5.062-4.791");
}
</style><path class="ofvutzbjk"/><path class="k_3sr2hrx"/>`,
		"fallback": "arcticons:muviz-edge",
	});
}

export default Component;
