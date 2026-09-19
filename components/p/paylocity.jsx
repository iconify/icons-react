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
		"content": `<style>.emvmliwge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.11 3.551C10.72 3.53 4.696 13.61 3.5 22.071h13.76c.553-4.804 3.55-12.867 6.74-12.867s6.187 8.063 6.74 12.867H44.5C43.084 12.043 34.882-.261 24 4.677c-1.7-.771-3.335-1.122-4.89-1.126");
}

.s1idfybtb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.323c4.15-2.033 7.471-11.532 7.43-17.125");
}

.xuizsnqlc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.677c-4.15 2.033-7.471 11.532-7.43 17.125m12.32 22.647c8.39.022 14.415-10.059 15.61-18.52H30.74c-.553 4.804-3.551 12.867-6.74 12.867s-6.187-8.063-6.74-12.867H3.5C4.916 35.957 13.118 48.261 24 43.323c1.7.771 3.335 1.122 4.89 1.126");
}
</style><path class="emvmliwge"/><path class="xuizsnqlc"/><path class="s1idfybtb"/>`,
		"fallback": "arcticons:paylocity",
	});
}

export default Component;
