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
		"content": `<style>.r7rs0obbo {
  fill: currentColor;
  d: path("m11.05 15l-2.8-2.8l1.4-1.4l1.4 1.4l3.55-3.55l1.4 1.4zM5 23V1h14v22zm2-5h10V6H7z");
}
</style><path class="r7rs0obbo"/>`,
		"fallback": "material-symbols:security-update-good-sharp",
	});
}

export default Component;
