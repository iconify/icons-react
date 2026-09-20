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
		"content": `<style>.yw2qgsdsm {
  fill: currentColor;
  d: path("m8.162 19.273l-4.347.912l.912-4.346zm.76-.648l-3.547-3.546l11.5-11.481l3.527 3.527z");
}
</style><path class="yw2qgsdsm"/>`,
		"fallback": "material-symbols-light:stylus-sharp",
	});
}

export default Component;
