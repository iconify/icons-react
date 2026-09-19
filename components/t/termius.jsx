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
		"content": `<style>.nn3xd0bid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.919 26.975a5.9 5.9 0 0 0 6.302 0");
}

.uhj05ucjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.295 35.024A9.803 9.803 0 0 1 4.5 25.212a10.19 10.19 0 0 1 4.535-8.397a9.867 9.867 0 0 1 9.82-9.945a10.16 10.16 0 0 1 7.406 3.272a10.5 10.5 0 0 1 4.336-.963a9.697 9.697 0 0 1 9.733 9.748a9.751 9.751 0 0 1-7.032 16.936a11.07 11.07 0 0 1-9.14 5.267a10.02 10.02 0 0 1-9.141-6.073a5 5 0 0 0-.721-.033Zm2.98-14.3l5.87 1.86m-5.87 1.86l5.87-1.86");
}
</style><path class="uhj05ucjt"/><path class="nn3xd0bid"/>`,
		"fallback": "arcticons:termius",
	});
}

export default Component;
