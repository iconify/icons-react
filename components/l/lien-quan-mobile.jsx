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
		"content": `<style>.jchcg9bbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.338 7.932l-6.095 14.683L9.595 24l6.648 1.385L24.554 44.5M24 3.5l7.757 19.115L38.405 24l-6.648 1.385l-6.095 14.683");
}

.sx_0imbqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.676 24c0-.277 3.047-7.203 3.324-7.203s3.324 6.926 3.324 7.203s-3.047 6.649-3.324 6.649s-3.324-6.372-3.324-6.649");
}
</style><path class="sx_0imbqr"/><path class="jchcg9bbq"/>`,
		"fallback": "arcticons:lien-quan-mobile",
	});
}

export default Component;
