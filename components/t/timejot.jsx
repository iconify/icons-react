import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i0i3b7qiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.385 19.348L37.308 5.5H5.49v34.076l13.554.083m-6.856-25.456l19.001.089m-19.331 8.692l10.822-.089m-10.74 8.338h6.692");
}

.joi93l_zg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.538 42.5a8.686 8.686 0 0 1-6.743-8.747a8.64 8.64 0 0 1 6.863-8.624a8.176 8.176 0 0 1 9.096 5.79a9.11 9.11 0 0 1-3.745 10.61m.004-.003l.002-5.9m-.002 5.9l5.496-.015");
}
</style><path class="i0i3b7qiq"/><path class="joi93l_zg"/>`,
		"fallback": "arcticons:timejot",
	});
}

export default Component;
