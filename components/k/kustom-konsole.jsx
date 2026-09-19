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
		"content": `<style>.le1ad3bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 33.698h-39V14.302h39l-9.559 10.01z");
}

.qdd1a8bgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.052 14.302l-9.559 10.01l9.559 9.386");
}
</style><path class="le1ad3bkb"/><path class="qdd1a8bgg"/>`,
		"fallback": "arcticons:kustom-konsole",
	});
}

export default Component;
