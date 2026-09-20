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
		"content": `<style>.soa8ozaic {
  fill: currentColor;
  d: path("M2 10V2h8v8zm0 12v-8h8v8zm12-12V2h8v8zm0 12v-8h8v8z");
}
</style><path class="soa8ozaic"/>`,
		"fallback": "material-symbols:view-comfy-alt-sharp",
	});
}

export default Component;
