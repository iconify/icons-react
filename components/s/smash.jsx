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
		"content": `<style>.hfxpj4baq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.955 6.7C5.92-1.301-2.006 39.293 13.817 34.03l19.304-7.132");
}

.mlgoyvtjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.948 21.068l18.448-6.412c17-6.038 8.89 34.539-17.557 26.676");
}
</style><path class="hfxpj4baq"/><path class="mlgoyvtjf"/>`,
		"fallback": "arcticons:smash",
	});
}

export default Component;
