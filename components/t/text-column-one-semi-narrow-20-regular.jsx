import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wzrho1btu {
  fill: currentColor;
  d: path("M6.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM6 11.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="wzrho1btu"/>`,
		"fallback": "fluent:text-column-one-semi-narrow-20-regular",
	});
}

export default Component;
