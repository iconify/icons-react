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
		"content": `<style>.g2ayd470f {
  fill: currentColor;
  d: path("M7 18h1v-1.5h8V18h1v-4q0-.825-.587-1.412T15 12h-3.5v3.5H8V11H7zm3.638-3.363q.362-.362.362-.887t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362t.888-.363M4 21V9l8-6l8 6v12z");
}
</style><path class="g2ayd470f"/>`,
		"fallback": "material-symbols:night-shelter-sharp",
	});
}

export default Component;
