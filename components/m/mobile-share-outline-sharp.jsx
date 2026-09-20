import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vg8rk-xtg {
  fill: currentColor;
  d: path("M8 16h2v-3h2.15l-1.05 1.1l1.4 1.4L16 12l-3.5-3.5l-1.4 1.4l1.05 1.1H8zm-3 7V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="vg8rk-xtg"/>`,
		"fallback": "material-symbols:mobile-share-outline-sharp",
	});
}

export default Component;
