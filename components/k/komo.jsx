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
		"content": `<style>.t1olzru6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.272 4.5v17.313L14.46 24l-2.188 2.187V43.5m23.456-39L16.647 24l19.081 19.5");
}
</style><path class="t1olzru6f"/>`,
		"fallback": "arcticons:komo",
	});
}

export default Component;
