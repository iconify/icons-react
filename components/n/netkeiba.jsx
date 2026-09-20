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
		"content": `<style>.nkc6r_byh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26 32.25h17.5l-19.5-14v-2.5l-10.583 7.466zm-8.192-5.881l5.692-4.016m-12.017 2.228L4.5 29.508v1.25l2.078 1.492H18.33l1.934-1.365z");
}
</style><path class="nkc6r_byh"/>`,
		"fallback": "arcticons:netkeiba",
	});
}

export default Component;
