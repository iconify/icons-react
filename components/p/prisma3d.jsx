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
		"content": `<style>.v9a4g_b9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.253 29.999l17.023 9.828m-36.552.001L22.746 30M24 27.803V8.172m0 7.343L12.083 36.156h23.834z");
}
</style><path class="v9a4g_b9n"/>`,
		"fallback": "arcticons:prisma3d",
	});
}

export default Component;
