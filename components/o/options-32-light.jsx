import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x64-geblu {
  fill: currentColor;
  d: path("M11.5 19a4.5 4.5 0 0 1 4.473 4H29.5a.5.5 0 0 1 0 1H15.973a4.5 4.5 0 0 1-8.946 0H2.5a.5.5 0 0 1 0-1h4.527a4.5 4.5 0 0 1 4.473-4m0 1a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m9-16a4.5 4.5 0 0 1 4.473 4H29.5a.5.5 0 0 1 0 1h-4.527a4.5 4.5 0 0 1-8.946 0H2.5a.5.5 0 0 1 0-1h13.527A4.5 4.5 0 0 1 20.5 4m0 1a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7");
}
</style><path class="x64-geblu"/>`,
		"fallback": "fluent:options-32-light",
	});
}

export default Component;
