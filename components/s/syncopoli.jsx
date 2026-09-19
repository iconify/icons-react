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
		"content": `<style>.dz7mi3bej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.35 15.55l12.15 5.02l-11.28 5.29zM41.48 27.2c-8.69 7.51-16.29 11.9-23.55 11.9c-6.58 0-8.79-5.18-7.4-9.18");
}

.f00-py4tu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.52 20.8c8.69-7.51 16.29-11.9 23.55-11.9c6.58 0 8.79 5.18 7.4 9.18");
}

.zhmk16bxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.65 32.45L4.5 27.43l11.28-5.29z");
}
</style><path class="f00-py4tu"/><path class="dz7mi3bej"/><path class="zhmk16bxw"/>`,
		"fallback": "arcticons:syncopoli",
	});
}

export default Component;
