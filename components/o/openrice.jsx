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
		"content": `<style>.fisaaybqm {
  d: path("M5.412 23.081c8.13-29.206 36.288-16.693 37.62.225");
}

.qorj4e60a {
  d: path("M42.342 19.725c14.985 8.588-53.608 6.593-35.897.146");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zpcwg6y6x {
  d: path("M3.5 21.939S5.682 42.42 24.222 42.42s20.263-20.266 20.263-20.266");
}
</style><g class="y9tr6bcfx"><path class="fisaaybqm"/><path class="qorj4e60a"/><path class="zpcwg6y6x"/></g>`,
		"fallback": "arcticons:openrice",
	});
}

export default Component;
