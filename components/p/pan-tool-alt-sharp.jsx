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
		"content": `<style>.y4vgbltvs {
  fill: currentColor;
  d: path("m9.275 20l-6.471-7.825l1.083-.95L8 13.787V2.98h1v8.558h2.673V6h1v5.539h2.673V7.191h1v4.347H19V9h1v11z");
}
</style><path class="y4vgbltvs"/>`,
		"fallback": "material-symbols-light:pan-tool-alt-sharp",
	});
}

export default Component;
