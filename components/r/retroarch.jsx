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
		"content": `<style>.sljploepj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.74 12.05h3.12l2.53 4.38h5.22l2.53-4.38h3.12l-2.53 4.38h3.94l1.73 6.48h4.11l-1.61-6h3.16l1.62 6L43.5 26h-7.28l1.32 4.9h-5l3.43 5.95h-4.56L28 30.87h-8l-3.43 5.95h-4.5l3.43-5.95h-5L11.78 26H4.5l.82-3.06l1.62-6h3.16l-1.61 6h4.11l1.73-6.48h3.94l-2.53-4.38Zm.89 6.66v4.41H21v-4.41Zm10.34 0v4.41h4.4v-4.41Z");
}
</style><path class="sljploepj"/>`,
		"fallback": "arcticons:retroarch",
	});
}

export default Component;
