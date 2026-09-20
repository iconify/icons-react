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
		"content": `<style>.lwnwcl3_t {
  fill: currentColor;
  d: path("m4.825 22.575l-1.675-1.1q1.125-2.2 1.475-4.6T4.975 12q0-2.45-.35-4.85T3.15 2.55l1.675-1.1q.325.625.588 1.262T5.875 4H8q1.65.025 2.825 1.188T12 8.025v8q0 1.65-1.175 2.825T8 20.025H5.875q-.2.65-.463 1.288t-.587 1.262M18 16l-4-4l4-4l1.4 1.425L17.825 11H22v2h-4.175l1.575 1.6z");
}
</style><path class="lwnwcl3_t"/>`,
		"fallback": "material-symbols:watch-button-sharp",
	});
}

export default Component;
