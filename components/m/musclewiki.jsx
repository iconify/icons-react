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
		"content": `<style>.lm53s9biy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.808 20.181V42.5L24 29.293l-9.808 13.172v-22.31");
}

.vjti1abtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.449 29.994V5.5L24 25.116L40.551 5.537V30.02");
}
</style><path class="vjti1abtg"/><path class="lm53s9biy"/>`,
		"fallback": "arcticons:musclewiki",
	});
}

export default Component;
