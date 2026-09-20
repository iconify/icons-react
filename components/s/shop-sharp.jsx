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
		"content": `<style>.g09oe1bdi {
  fill: currentColor;
  d: path("M2 21V6h6V2h8v4h6v15zm8-15h4V4h-4zm-.5 12l7-4.5l-7-4.5z");
}
</style><path class="g09oe1bdi"/>`,
		"fallback": "material-symbols:shop-sharp",
	});
}

export default Component;
