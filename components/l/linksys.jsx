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
		"content": `<style>.f-i3y9aqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.564 6.999V42.5h31.557");
}

.kp4q75pah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.398 6.999V31.98h19.723M35.742 5.5c2.59 0 4.694 2.104 4.694 4.694s-2.104 4.694-4.694 4.694s-4.694-2.104-4.694-4.694S33.15 5.5 35.742 5.5");
}
</style><path class="f-i3y9aqg"/><path class="kp4q75pah"/>`,
		"fallback": "arcticons:linksys",
	});
}

export default Component;
