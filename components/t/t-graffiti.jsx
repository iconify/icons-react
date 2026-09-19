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
		"content": `<style>.xi9oep7-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.935 12.466c25.248 9.018 37.42-1.013 33.363-5.409s-17.132 0-17.132 19.838c0 9.918 1.803 17.132 13.525 15.328");
}
</style><path class="xi9oep7-f"/>`,
		"fallback": "arcticons:t-graffiti",
	});
}

export default Component;
