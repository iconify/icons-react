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
		"content": `<style>.m2v6vdxtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.961 13.065h7.518v21.87H6.961zm13.832 5.467h7.518v16.402h-7.518zm14.201 8.885h7.518v7.518h-7.518z");
}

.x08ci9bjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 34.924l14.294-11.49L31.27 27.93l12.23-9.427");
}
</style><path class="m2v6vdxtr"/><path class="x08ci9bjk"/>`,
		"fallback": "arcticons:markushiexpensemanager",
	});
}

export default Component;
