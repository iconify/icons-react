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
		"content": `<style>.iruzqnsff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.78 24H43.5m-22.66 0H4.5m26.28 0l-9.94 7.43V16.57Zm12.72 0L24 43.5L4.5 24L24 4.5Z");
}
</style><path class="iruzqnsff"/>`,
		"fallback": "arcticons:stremio",
	});
}

export default Component;
