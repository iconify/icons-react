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
		"content": `<style>.f2aq60dtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  d: path("M24 8.5a5.453 5.453 0 0 1 5.45 5.456v20.088a5.45 5.45 0 1 1-10.9 0V13.956A5.453 5.453 0 0 1 24 8.5Z");
}

.zclypo0se {
  fill: none;
  stroke: currentColor;
  d: path("M31.83 33.519c0 3.203.063 6.041-1.315 8.384S25.553 44.5 24.722 44.5h-1.444c-.83 0-4.415-.254-5.793-2.597s-1.314-5.181-1.314-8.384V14.48c0-3.203-.064-6.041 1.314-8.384S22.448 3.5 23.278 3.5h1.444c.83 0 4.415.254 5.793 2.597s1.314 5.181 1.314 8.384z");
}
</style><path class="f2aq60dtp"/><path class="zclypo0se"/>`,
		"fallback": "arcticons:miband",
	});
}

export default Component;
