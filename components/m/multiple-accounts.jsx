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
		"content": `<style>.un4dlib0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.384 14.304c-5.293-2.004-11.21.674-13.216 5.98s.66 11.232 5.953 13.235s11.21-.673 13.216-5.98c.427-1.13.652-2.329.664-3.538c.056-5.671 4.69-10.229 10.35-10.18c5.661.05 10.205 4.688 10.148 10.36s-4.69 10.23-10.35 10.18a10.2 10.2 0 0 1-3.53-.662");
}
</style><path class="un4dlib0t"/>`,
		"fallback": "arcticons:multiple-accounts",
	});
}

export default Component;
