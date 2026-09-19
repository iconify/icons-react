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
		"content": `<style>.kduc8yd0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.023 35.45L24.074 43l12.903-7.575v-15.25L11.023 5v15.225l13.051 7.65zM24 12.588L24.074 43M11.023 20.225L24 12.588m12.977 7.587l-12.903 7.7m0-.001l12.903 7.55");
}
</style><path class="kduc8yd0o"/>`,
		"fallback": "arcticons:ncell-app",
	});
}

export default Component;
