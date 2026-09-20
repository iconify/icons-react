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
		"content": `<style>.ys1vj0b_z {
  fill: currentColor;
  d: path("M6.962 21V10.923h10.077V21zm0-12.808v-1.23h1.23v1.23zm8.846 0v-1.23h1.23v1.23zM6.962 4.231V3h1.23v1.23zm4.423 0V3h1.23v1.23zm4.423 0V3h1.23v1.23z");
}
</style><path class="ys1vj0b_z"/>`,
		"fallback": "material-symbols-light:move-selection-down-sharp",
	});
}

export default Component;
