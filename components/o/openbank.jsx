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
		"content": `<style>.i39rm2bew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.58 28.043a3.96 3.96 0 0 1-7.92 0v-1.191");
}

.lk3kqe07h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.414 18.696a7.946 7.946 0 1 0 1.978 5.246l1.987-1.806H43.5v5.907a3.96 3.96 0 0 1-7.92 0v-1.191");
}
</style><path class="i39rm2bew"/><path class="lk3kqe07h"/>`,
		"fallback": "arcticons:openbank",
	});
}

export default Component;
