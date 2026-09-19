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
		"content": `<style>.gvia1grae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.876 28.694c4.198-8.521-3.855-14.405-12.665-18.702C5.33-1.654 5.615 12.15 5.03 22.65c-.39 7.044 1.69 24.287 16.698 17.702c18.619-8.17 19.542-14.95 5.469-23.172c-14.35-8.385-15.917-1.87-15.975 6.188c-.011 1.57-1.074 11.994 9.642 9.932a19.84 19.84 0 0 0 8.636-4.174");
}
</style><path class="gvia1grae"/>`,
		"fallback": "arcticons:movielab",
	});
}

export default Component;
