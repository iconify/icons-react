import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mlawiybel {
  fill: currentColor;
  d: path("M2.004 6.75a.75.75 0 0 1 .75-.75H25.25a.75.75 0 0 1 0 1.5H2.755a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75H25.25a.75.75 0 0 1 0 1.5H2.755a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5h12.981l.71-1.5zm11.331 5a1.5 1.5 0 0 0 .296 1.5H2.754a.75.75 0 0 1 0-1.5zm4.732-7h6.328a.5.5 0 0 1 .436.745L23.751 18h1.514a.75.75 0 0 1 .569 1.24l-6.416 7.452c-.522.606-1.499.052-1.246-.707L19.5 22h-4a.5.5 0 0 1-.451-.714l3.316-7a.5.5 0 0 1 .452-.286");
}
</style><path class="mlawiybel"/>`,
		"fallback": "fluent:text-grammar-lightning-28-regular",
	});
}

export default Component;
