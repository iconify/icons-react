import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tpyrfmblc {
  fill: currentColor;
  d: path("M7 18h10V8.96l-5-3.71l-5 3.71zm-1 1V9.716L2.604 12.23l-.598-.787L12 4l10.02 7.439l-.604.792L18 9.696V19zm7.066-3.934q.434-.433.434-1.066q0-.483-.27-1.005q-.268-.522-1.23-1.918q-1 1.454-1.25 1.938q-.25.483-.25.985q0 .633.434 1.066q.433.434 1.066.434t1.066-.434M12 14");
}
</style><path class="tpyrfmblc"/>`,
		"fallback": "material-symbols-light:water-damage-outline",
	});
}

export default Component;
