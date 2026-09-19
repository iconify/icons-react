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
		"content": `<style>.damm37brh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.916 6.085L30.167 17.834L17.834 5.501L5.501 17.834l12.333 12.333L6.085 41.916m30.248-5.582H11.666");
}

.lvj2k008s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 17.834L30.167 30.167H42.5L30.167 42.499H7.5c-1.108 0-2-.892-2-2V17.832h12.333");
}

.nw30bvhdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 5.5H40.5c1.108 0 2 .892 2 2v22.668M17.833 17.834h12.333v12.333H17.833z");
}
</style><path class="nw30bvhdk"/><path class="lvj2k008s"/><path class="damm37brh"/>`,
		"fallback": "arcticons:skylink-live-tv",
	});
}

export default Component;
