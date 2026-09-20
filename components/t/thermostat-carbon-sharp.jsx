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
		"content": `<style>.hpmkb9brn {
  fill: currentColor;
  d: path("M12 21.377L2.623 12L12 2.623L21.377 12z");
}
</style><path class="hpmkb9brn"/>`,
		"fallback": "material-symbols-light:thermostat-carbon-sharp",
	});
}

export default Component;
