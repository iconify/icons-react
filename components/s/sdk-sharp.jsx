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
		"content": `<style>.kn0yajdvi {
  fill: currentColor;
  d: path("M3 21V5.8L5.3 3h13.4L21 5.8V21zM5.4 6h13.2l-.85-1H6.25zm9.8 7.5l-2.1 2.1l1.45 1.45l3.55-3.55l-3.55-3.55l-1.45 1.45zm-6.35 0l2.1-2.1L9.5 9.95L5.95 13.5l3.55 3.55l1.45-1.45z");
}
</style><path class="kn0yajdvi"/>`,
		"fallback": "material-symbols:sdk-sharp",
	});
}

export default Component;
