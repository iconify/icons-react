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
		"content": `<style>.sm-6g9bhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.45 28.59c-2.36-8.807 2.174-18 10.598-21.49s18.13-.194 22.69 7.703m1.815 4.381A18.17 18.17 0 0 1 24 42.057");
}

.xkjgq7bkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.351 16.611c8.506-7.436 13.047-2.143 8.381 8.133C14.454 27.56 10.558 35 9.624 39.677c-.433 2.164 1.504 4.071 3.665 3.63C31.803 39.52 46.366 4.803 40.202 4.628c-2.89 0-6.006 1.834-7.95 3.068");
}
</style><path class="sm-6g9bhd"/><path class="xkjgq7bkh"/>`,
		"fallback": "arcticons:my-vnpt",
	});
}

export default Component;
