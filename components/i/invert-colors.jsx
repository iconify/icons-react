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
		"content": `<style>.jygypnbpa {
  fill: currentColor;
  d: path("M12 20q-2.921 0-4.96-2.002T5 13.125q0-1.477.558-2.687t1.484-2.196L12 3.384l4.958 4.858q.927.985 1.484 2.224q.558 1.24.558 2.659q0 2.871-2.04 4.873T12 20m0-1V4.8L7.75 9q-.875.825-1.312 1.875T6 13.125q0 2.425 1.75 4.15T12 19");
}
</style><path class="jygypnbpa"/>`,
		"fallback": "material-symbols-light:invert-colors",
	});
}

export default Component;
