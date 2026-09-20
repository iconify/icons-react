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
		"content": `<style>.dmhtxwbrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.96 12.618A20.05 20.05 0 0 1 24 4.5a20.05 20.05 0 0 1 16.04 8.102m-26.322 4.302A12.9 12.9 0 0 1 24 11.533a12.9 12.9 0 0 1 10.306 5.387m-15.241 4.03a6.185 6.185 0 0 1 9.87 0M12.958 43.476V21.521l10.99 13.348l10.99-13.315V43.5");
}
</style><path class="dmhtxwbrq"/>`,
		"fallback": "arcticons:tpmifi",
	});
}

export default Component;
