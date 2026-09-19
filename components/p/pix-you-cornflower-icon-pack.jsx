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
		"content": `<style>.ab9g42bke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.397 38.558l7.103 2.621L30.167 6.821L24 24");
}

.oj464bbcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.064 38.558l7.103 2.621L17.833 6.821L5.5 41.179l7.103-2.621");
}
</style><path class="oj464bbcb"/><path class="ab9g42bke"/>`,
		"fallback": "arcticons:pix-you-cornflower-icon-pack",
	});
}

export default Component;
