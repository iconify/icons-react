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
		"content": `<style>.rhf7l7mgl {
  fill: currentColor;
  d: path("M8 8v8zM6 18V6h12v12zm2-2h8V8H8z");
}
</style><path class="rhf7l7mgl"/>`,
		"fallback": "material-symbols:stop-outline",
	});
}

export default Component;
