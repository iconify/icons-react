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
		"content": `<style>.n92wi3i0q {
  width: 19.984px;
  height: 29.383px;
  x: 9.539px;
  y: 14.385px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.y4e4rsb_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.72 15.557l-.485-.92a2 2 0 0 1 .833-2.703L24.2 4.464a2 2 0 0 1 2.703.833l11.863 22.44a2 2 0 0 1-.833 2.703l-8.408 4.445");
}
</style><rect class="n92wi3i0q"/><rect class="n92wi3i0q"/><path class="y4e4rsb_l"/>`,
		"fallback": "arcticons:lifelinker",
	});
}

export default Component;
