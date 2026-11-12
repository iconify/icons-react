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
		"content": `<style>.t4tuqbn3b {
  fill: currentColor;
  d: path("m2.051 17.684l4-12a1 1 0 0 1 1.898 0l4 12a1.001 1.001 0 0 1-1.898.632L9.279 16H4.721l-.772 2.316a1.001 1.001 0 0 1-1.898-.632M18 5a4 4 0 0 1 2.646 7A4 4 0 0 1 18 19h-3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-2 2v4h2.002A2 2 0 0 0 18 7Zm-7.387 7L7 9.162L5.387 14ZM16 17h2a2 2 0 0 0 .002-4H16Z");
}
</style><path class="t4tuqbn3b"/>`,
		"fallback": "coolicons:letters-ab-fill-sharp",
	});
}

export default Component;
