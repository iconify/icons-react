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
		"content": `<style>.jm5g4kxep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 16a8.31 8.31 0 0 0-8 8a8.3 8.3 0 0 0 8 8a8.3 8.3 0 0 0 8-8a8.3 8.3 0 0 0-8-8m24 0a8.3 8.3 0 0 0-8 8a8.3 8.3 0 0 0 8 8a8.31 8.31 0 0 0 8-8a8.3 8.3 0 0 0-8-8M11.99 31.99h24.02");
}
</style><path class="jm5g4kxep"/>`,
		"fallback": "arcticons:orangevvm",
	});
}

export default Component;
