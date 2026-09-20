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
		"content": `<style>.ebd-nz7po {
  fill: currentColor;
  d: path("M10.037 16.964Q8 14.927 8 12t2.036-4.963T15 5t4.964 2.036T22 12t-2.036 4.964T15 19t-4.963-2.036M7 18.712q-2.266-.604-3.633-2.475T2 12t1.367-4.236T7 5.288V6.35q-1.8.625-2.9 2.175T3 12t1.1 3.475T7 17.65z");
}
</style><path class="ebd-nz7po"/>`,
		"fallback": "material-symbols-light:toll",
	});
}

export default Component;
