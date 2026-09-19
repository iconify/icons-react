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
		"content": `<style>.e_7vy_l4j {
  d: path("M20.663 43.5v-3.28H9.322a1.78 1.78 0 0 1-1.78-1.78V9.081c0-.982.797-1.77 1.78-1.78h11.341V4.5l2.818.001v39z");
}

.q8jklybrc {
  d: path("M27.436 7.303h11.243a1.78 1.78 0 0 1 1.779 1.78v29.356c0 .983-.797 1.79-1.78 1.78H27.407V23.71l9.162 11.005v-23.97h-9.162V7.316m-6.873 16.342l-9.2 11.056h9.2z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="q8jklybrc"/><path class="e_7vy_l4j"/></g>`,
		"fallback": "arcticons:ves-image-and-photo-compare",
	});
}

export default Component;
