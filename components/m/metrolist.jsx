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
		"content": `<style>.n7xd0hbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.44 26.696l-5.063 5.062a2.557 2.557 0 0 0 0 3.617l6.377 6.376a2.557 2.557 0 0 0 3.616 0l7.436-7.435c.48-.48.749-1.13.749-1.809V7.33c0-1.626 1.966-2.44 3.116-1.29l10.7 10.7");
}
</style><path class="n7xd0hbyt"/>`,
		"fallback": "arcticons:metrolist",
	});
}

export default Component;
