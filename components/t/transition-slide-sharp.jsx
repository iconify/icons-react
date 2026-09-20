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
		"content": `<style>.ea0uyzmhg {
  fill: currentColor;
  d: path("M1 20V4h6v16zm8 0V4h14v16z");
}
</style><path class="ea0uyzmhg"/>`,
		"fallback": "material-symbols:transition-slide-sharp",
	});
}

export default Component;
