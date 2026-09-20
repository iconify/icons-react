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
		"content": `<style>.i2y10x-if {
  fill: currentColor;
  d: path("M2 19V5h20v14zm3.5-1h13V6h-13z");
}
</style><path class="i2y10x-if"/>`,
		"fallback": "material-symbols-light:tablet-sharp",
	});
}

export default Component;
