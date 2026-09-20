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
		"content": `<style>.z9vf9zb7r {
  fill: currentColor;
  d: path("M4 22V8l6-6h10v20zm5-11h2V7H9zm3 0h2V7h-2zm3 0h2V7h-2z");
}
</style><path class="z9vf9zb7r"/>`,
		"fallback": "material-symbols:sd-card-sharp",
	});
}

export default Component;
