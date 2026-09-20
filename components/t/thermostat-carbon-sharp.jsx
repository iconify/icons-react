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
		"content": `<style>.k7udfjbos {
  fill: currentColor;
  d: path("M12 22.8L1.2 12L12 1.2L22.8 12z");
}
</style><path class="k7udfjbos"/>`,
		"fallback": "material-symbols:thermostat-carbon-sharp",
	});
}

export default Component;
