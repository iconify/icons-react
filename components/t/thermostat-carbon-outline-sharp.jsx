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
		"content": `<style>.ex8ivmb5t {
  fill: currentColor;
  d: path("M12 21.377L2.623 12L12 2.623L21.377 12zM12 20l8-8l-8-8l-8 8zm0-8");
}
</style><path class="ex8ivmb5t"/>`,
		"fallback": "material-symbols-light:thermostat-carbon-outline-sharp",
	});
}

export default Component;
