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
		"content": `<style>.m0n9q152t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.856 7.49c7.39 7.831 8.247 22.796.03 33.049c19.591-3.406 19.39-28.317-.03-33.048m-9.891-.03C-.34 12.864-.34 35.748 19.084 40.421c-7.901-9.835-8.24-22.91-.119-32.96");
}
</style><path class="m0n9q152t"/>`,
		"fallback": "arcticons:my-neoma-bs",
	});
}

export default Component;
