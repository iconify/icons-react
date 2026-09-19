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
		"content": `<style>.hilcnhbxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.248 21.026L9.872 34.344c-2.71 3.85.043 9.156 4.752 9.156h18.752c4.709 0 7.462-5.306 4.752-9.156l-9.376-13.318c-2.315-3.288-7.189-3.288-9.504 0");
}

.od7ixls0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.248 26.974L9.872 13.657c-2.71-3.85.043-9.157 4.752-9.157h18.752c4.709 0 7.462 5.307 4.752 9.157l-9.376 13.317c-2.315 3.288-7.189 3.288-9.504 0");
}
</style><path class="od7ixls0z"/><path class="hilcnhbxs"/>`,
		"fallback": "arcticons:timecap",
	});
}

export default Component;
