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
		"content": `<style>.ohrpceb7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.916 5.5v30.4m4.8-16.2h-16.2m16.2 7.6h-16.2m3.8-15.2v30.4m25.169-10.679l-9.766-8.189V40.01z");
}
</style><path class="ohrpceb7h"/>`,
		"fallback": "arcticons:nowplaying4droid",
	});
}

export default Component;
