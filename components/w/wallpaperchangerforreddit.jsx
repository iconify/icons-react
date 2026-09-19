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
		"content": `<style>.f4mhm4bhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.956 10.23L5.5 19.763l5.631 3.076L5.5 25.913l5.642 3.08L5.5 32.076l17.456 9.531l17.456-9.531l-5.642-3.081l5.642-3.08l-5.631-3.076l5.63-3.076Z");
}

.i3z8p7m6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.142 28.994l11.814 6.435l11.814-6.435m-9.443-17.468l1.823-5.132l9.637 2.998");
}

.jxj3lcbav {
  cx: 39.785px;
  cy: 10.386px;
  r: 2.715px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s979f2qmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.131 22.838l11.825 6.43l11.825-6.43");
}
</style><path class="f4mhm4bhr"/><path class="s979f2qmd"/><path class="i3z8p7m6h"/><circle class="jxj3lcbav"/>`,
		"fallback": "arcticons:wallpaperchangerforreddit",
	});
}

export default Component;
