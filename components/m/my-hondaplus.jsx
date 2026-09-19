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
		"content": `<style>.zi6lqkbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.333 17.833h6.834a4 4 0 0 1 4 4v6.834m0 3v4.666c0 3.417-2.75 6.167-6.167 6.167s-6.167-2.75-6.167-6.167v-4.166a2 2 0 0 0-2-2h-4.166C8.25 30.167 5.5 27.417 5.5 24s2.75-6.167 6.167-6.167h4.666m1.5-6.166C17.833 8.25 20.583 5.5 24 5.5s6.167 2.75 6.167 6.167v4.166a2 2 0 0 0 2 2h4.166c3.417 0 6.167 2.75 6.167 6.167s-2.75 6.167-6.167 6.167h-14.5a4 4 0 0 1-4-4z");
}
</style><path class="zi6lqkbas"/>`,
		"fallback": "arcticons:my-hondaplus",
	});
}

export default Component;
