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
		"content": `<style>.phvm9mmzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.16 7.14v19.152l12.875 12.516l-.359-30.879L36.84 21.01v19.85L23.909 27.929M11.16 7.14l12.516 12.516");
}
</style><path class="phvm9mmzz"/>`,
		"fallback": "arcticons:nyon-dark",
	});
}

export default Component;
