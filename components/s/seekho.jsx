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
		"content": `<style>.h-0o86bxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.091 3.5c4.478 4.815.337 9.722.337 9.722l-8.035 7.882l5.643 5.704l-5.06 4.999L9.334 21.165z");
}

.xotlkxbcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.909 44.5c-4.478-4.815-.337-9.722-.337-9.722l8.035-7.882l-5.643-5.704l5.06-4.999l10.642 10.642z");
}
</style><path class="h-0o86bxs"/><path class="xotlkxbcz"/>`,
		"fallback": "arcticons:seekho",
	});
}

export default Component;
