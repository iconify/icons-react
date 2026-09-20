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
		"content": `<style>.xk4jygcos {
  fill: currentColor;
  d: path("M5 23V1h14v22zm2-5h10V6H7z");
}
</style><path class="xk4jygcos"/>`,
		"fallback": "material-symbols:smartphone-sharp",
	});
}

export default Component;
