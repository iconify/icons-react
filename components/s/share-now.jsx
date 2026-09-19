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
		"content": `<style>.ap4vg3bcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 11.703l13.406 9.75v15.844L43.5 11.703");
}
</style><path class="ap4vg3bcq"/>`,
		"fallback": "arcticons:share-now",
	});
}

export default Component;
