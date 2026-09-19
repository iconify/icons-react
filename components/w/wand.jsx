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
		"content": `<style>.e92gzlzeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 8.13l10.28 28.11l9.27-28.11l9.24 28.13L43.5 8.33m-39 31.54h39");
}
</style><path class="e92gzlzeo"/>`,
		"fallback": "arcticons:wand",
	});
}

export default Component;
