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
		"content": `<style>.a6h586ega {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.462c-6.73 0-17.448-12.79-17.448-25.91c0-9 7.523-11.062 17.448-11.062s17.448 2.062 17.448 11.062c0 13.121-10.718 25.91-17.448 25.91m-5.266-20.309L28.328 5.65M16.824 38.965l15.16-26.077");
}
</style><path class="a6h586ega"/>`,
		"fallback": "arcticons:inure",
	});
}

export default Component;
