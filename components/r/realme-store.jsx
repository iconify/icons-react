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
		"content": `<style>.k48obebjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.409 20.824c-3.19-3.025 3.025-5.919 3.266-.822m33.561.844c3.848-3.343-2.28-6.423-2.674-2.05");
}

.xab3_vb1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.294 18.917c-6.905 16.21-27.227 16.78-34.69.58");
}
</style><path class="xab3_vb1u"/><path class="k48obebjg"/>`,
		"fallback": "arcticons:realme-store",
	});
}

export default Component;
