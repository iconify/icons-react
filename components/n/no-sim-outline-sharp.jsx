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
		"content": `<style>.llv-unbdg {
  fill: currentColor;
  d: path("m20 17.175l-2-2V4h-7.15l-2 2L7.4 4.6L10 2h10zm.5 6.125L6 8.8V20h12v-2.025l2 2V22H4V8l.6-.6L.7 3.5l1.425-1.4L21.9 21.875zm-8.85-8.825");
}
</style><path class="llv-unbdg"/>`,
		"fallback": "material-symbols:no-sim-outline-sharp",
	});
}

export default Component;
