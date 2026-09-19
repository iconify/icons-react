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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.r15nf_o2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.5 19.536v8.928h7.44m0-8.928v8.928m7.441-8.928v8.928m-7.441-4.481h7.441M36.5 19.536l-3.72 8.928l-3.72-8.928");
}
</style><path class="r15nf_o2w"/><path class="g2wj9jbhp"/>`,
		"fallback": "arcticons:lhv",
	});
}

export default Component;
