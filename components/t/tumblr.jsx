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
		"content": `<style>.u152h8d3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.526 43.5c-5.865 0-10.236-3.017-10.236-10.237V21.702h-5.33V15.44c5.865-1.522 8.318-6.57 8.6-10.941h6.092v9.926h7.106v7.276h-7.106v10.067c0 3.017 1.523 4.06 3.947 4.06h3.441v7.67z");
}
</style><path class="u152h8d3c"/>`,
		"fallback": "arcticons:tumblr",
	});
}

export default Component;
