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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nwd_i9b4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.568 19.507c8.024-9.448 21.338-9.448 28.864.393m-22.247 6.368c3.473-5.789 11.578-5.789 15.63 0m-5.499 6.368L24 35.531l-2.316-2.895q2.316-2.316 4.631 0");
}
</style><path class="nwd_i9b4s"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:mi-wi-fi",
	});
}

export default Component;
