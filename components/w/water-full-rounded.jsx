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
		"content": `<style>.g77t366db {
  fill: currentColor;
  d: path("M5.68 8.933Q6.938 8.219 8.3 7.86q1.363-.36 2.788-.36q.73 0 1.458.09t1.434.29q1.327.37 2.018.495q.692.125 1.5.125h.886l.483-4.5H5.116zM7.476 21q-.64 0-1.097-.404t-.513-1.025L4.14 4.283q-.067-.52.29-.901T5.309 3h13.384q.52 0 .877.382t.29.9l-1.705 15.29q-.056.62-.513 1.024q-.456.404-1.097.404z");
}
</style><path class="g77t366db"/>`,
		"fallback": "material-symbols-light:water-full-rounded",
	});
}

export default Component;
