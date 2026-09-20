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
		"content": `<style>.utdx32bqw {
  fill: currentColor;
  d: path("M6.962 13.077V3h10.077v10.077zm8.846 3.962v-1.231h1.23v1.23zm-8.846 0v-1.231h1.23v1.23zM15.808 21v-1.23h1.23V21zm-4.424 0v-1.23h1.231V21zm-4.423 0v-1.23h1.231V21z");
}
</style><path class="utdx32bqw"/>`,
		"fallback": "material-symbols-light:move-selection-up-sharp",
	});
}

export default Component;
