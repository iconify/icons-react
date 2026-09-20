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
		"content": `<style>.gdhmybcif {
  fill: currentColor;
  d: path("M16.75 17.577v-7.046l-2.1 2.1l-.708-.708l3.308-3.307l3.308 3.307l-.708.708l-2.1-2.1v7.046zm-12.75 0l3.76-10.23h1.09l3.817 10.23h-1.105l-1.039-2.96h-4.43l-1.02 2.96zm2.437-3.867h3.755L8.337 8.487h-.062z");
}
</style><path class="gdhmybcif"/>`,
		"fallback": "material-symbols-light:uppercase-sharp",
	});
}

export default Component;
