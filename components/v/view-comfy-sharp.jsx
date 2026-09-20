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
		"content": `<style>.o0vsvgbcl {
  fill: currentColor;
  d: path("M2 11V4h20v7zm8 9v-7h12v7zm-8 0v-7h6v7z");
}
</style><path class="o0vsvgbcl"/>`,
		"fallback": "material-symbols:view-comfy-sharp",
	});
}

export default Component;
