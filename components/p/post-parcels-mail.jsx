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
		"content": `<style>.i8rntb6dk {
  d: path("M12.615 29.172v5.516L25.673 42.5l12.534-7.91V23.395L25.51 31.22l-12.778-7.95l-5.604-9.785L20.678 5.5l4.674 9.76l6.641 4.167");
}

.svcufp50f {
  d: path("m25.51 31.221l2.668-8.948l12.694-8.88l-2.684 10.018m-25.39-.171l12.555-7.97");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="i8rntb6dk"/><path class="svcufp50f"/></g>`,
		"fallback": "arcticons:post-parcels-mail",
	});
}

export default Component;
