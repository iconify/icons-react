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
		"content": `<style>.sl5antb9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.52 6.53l-4.32 4.32A15.4 15.4 0 0 0 24 8.5C15.44 8.5 8.5 15.44 8.5 24c0 3.01.86 5.82 2.35 8.2l-4.32 4.32A21.3 21.3 0 0 1 2.5 24C2.5 12.13 12.13 2.5 24 2.5c4.68 0 9 1.49 12.52 4.03M45.5 24c0 11.87-9.63 21.5-21.5 21.5c-4.68 0-9-1.49-12.52-4.03l4.32-4.32A15.4 15.4 0 0 0 24 39.5c8.56 0 15.5-6.94 15.5-15.5c0-3.01-.86-5.82-2.35-8.2l4.32-4.32C44.01 15 45.5 19.32 45.5 24");
}
</style><path class="sl5antb9i"/>`,
		"fallback": "arcticons:oth-app",
	});
}

export default Component;
