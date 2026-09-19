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
		"content": `<style>.jbao-2bhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.33 6.914l-.451 5.37l-5.371-.451");
}

.rjti1kztj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.187 41.878q.471-.325.923-.673m-6.478 3.409a22 22 0 0 0 2.754-1.106M22.19 45.592a21.3 21.3 0 0 0 5.254-.205m-15.949-3.739a21.6 21.6 0 0 0 7.438 3.413M41.88 12.285A21.479 21.479 0 1 0 9.146 39.704");
}
</style><path class="rjti1kztj"/><path class="jbao-2bhv"/>`,
		"fallback": "arcticons:upgradeall",
	});
}

export default Component;
