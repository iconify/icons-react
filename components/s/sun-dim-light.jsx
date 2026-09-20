import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tnq9w4bux {
  fill: currentColor;
  d: path("M122 40v-8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0m68 88a62 62 0 1 1-62-62a62.07 62.07 0 0 1 62 62m-12 0a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50M59.76 68.24a6 6 0 1 0 8.48-8.48l-8-8a6 6 0 0 0-8.48 8.48Zm0 119.52l-8 8a6 6 0 1 0 8.48 8.48l8-8a6 6 0 1 0-8.48-8.48m136-136l-8 8a6 6 0 1 0 8.48 8.48l8-8a6 6 0 0 0-8.48-8.48m.48 136a6 6 0 0 0-8.48 8.48l8 8a6 6 0 0 0 8.48-8.48ZM40 122h-8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12m88 88a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m96-88h-8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12");
}
</style><path class="tnq9w4bux"/>`,
		"fallback": "ph:sun-dim-light",
	});
}

export default Component;
