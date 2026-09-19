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
		"content": `<style>.naxkm2b3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.976 43.489H9.998h18.493m-2.98 0h2.979c-3.92.058-5.018.02-5.018-3.3V23.882m-4.235 17.491c0 2.044-3.18 2.072-6.26 2.115M10.19 7.479h2.786c3.617 0 4.951-.957 6.261-1.794v35.688c.163 1.107.5 2.178 6.274 2.114m1.907-19.605c8.91 0 10.584-4.032 10.584-9.692S36.329 4.5 27.418 4.5h-3.946v19.383z");
}
</style><path class="naxkm2b3e"/>`,
		"fallback": "arcticons:priority-pass",
	});
}

export default Component;
