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
		"content": `<style>.pb9su1bbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.673 20.336L24 27.664l7.327-7.328");
}

.vg2q4b41h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.177 16.018l-7.37-7.37H12.193l-7.37 7.37a1.1 1.1 0 0 0-.058 1.496l18.399 21.454a1.1 1.1 0 0 0 1.672 0l18.399-21.454a1.1 1.1 0 0 0-.058-1.496");
}
</style><path class="vg2q4b41h"/><path class="pb9su1bbf"/>`,
		"fallback": "arcticons:my-oppo",
	});
}

export default Component;
