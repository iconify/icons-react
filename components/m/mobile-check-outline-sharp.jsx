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
		"content": `<style>.bip64xn8r {
  fill: currentColor;
  d: path("M11.05 15L16 10.05l-1.4-1.4l-3.55 3.55l-1.4-1.4l-1.4 1.4zM5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="bip64xn8r"/>`,
		"fallback": "material-symbols:mobile-check-outline-sharp",
	});
}

export default Component;
