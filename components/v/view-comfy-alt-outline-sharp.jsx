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
		"content": `<style>.p9ti8abbd {
  fill: currentColor;
  d: path("M2 10V2h8v8zm2-2h4V4H4zM2 22v-8h8v8zm2-2h4v-4H4zm10-10V2h8v8zm2-2h4V4h-4zm-2 14v-8h8v8zm2-2h4v-4h-4zm0-4");
}
</style><path class="p9ti8abbd"/>`,
		"fallback": "material-symbols:view-comfy-alt-outline-sharp",
	});
}

export default Component;
