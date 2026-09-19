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
		"content": `<style>.a2lvgsseg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 12.368v9.68h6.396c2.188 0 4.698-.799 4.698-4.586s-2.388-5.094-4.698-5.094zM5.83 4.5l5.83 7.811V43.5h9.51V28.783h2.037L31.473 43.5H42.17l-9.113-15.453c4.054-1.534 8.345-3.677 8.547-11.717S34.69 4.5 29.377 4.5z");
}
</style><path class="a2lvgsseg"/>`,
		"fallback": "arcticons:revolt",
	});
}

export default Component;
