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
		"content": `<style>.hmh8261hm {
  fill: currentColor;
  d: path("M12.442 21.5L8.981 5.489L6.396 17.5H2.5v-1h3.085l2.806-13h1.186l3.473 16.07L15.366 9.5h1.25l1.8 7H21.5v1h-3.866l-1.623-6.354L13.635 21.5z");
}
</style><path class="hmh8261hm"/>`,
		"fallback": "material-symbols-light:planner-review-sharp",
	});
}

export default Component;
