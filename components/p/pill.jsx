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
		"content": `<style>.xvfhz8biq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.778 39.536c-3.953 3.952-10.361 3.952-14.314 0s-3.952-10.361 0-14.314L25.222 8.464c3.953-3.952 10.361-3.952 14.314 0s3.952 10.361 0 14.314zm8.688-8.688L17.152 16.534");
}
</style><path class="xvfhz8biq"/>`,
		"fallback": "arcticons:pill",
	});
}

export default Component;
