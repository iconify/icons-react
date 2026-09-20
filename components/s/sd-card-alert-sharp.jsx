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
		"content": `<style>.f1v8azb5r {
  fill: currentColor;
  d: path("M11 17h2v-2h-2zm0-4h2V8h-2zm9 9H4V8l6-6h10z");
}
</style><path class="f1v8azb5r"/>`,
		"fallback": "material-symbols:sd-card-alert-sharp",
	});
}

export default Component;
