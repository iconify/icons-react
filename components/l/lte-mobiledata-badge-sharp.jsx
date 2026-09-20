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
		"content": `<style>.g158cpbqd {
  fill: currentColor;
  d: path("M4 16h5v-2H6V8H4zm6 0h2v-6h2V8H8v2h2zm5 0h5v-2h-3v-1h2v-2h-2v-1h3V8h-5zM1 21V3h22v18z");
}
</style><path class="g158cpbqd"/>`,
		"fallback": "material-symbols:lte-mobiledata-badge-sharp",
	});
}

export default Component;
