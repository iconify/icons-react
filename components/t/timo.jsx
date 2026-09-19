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
		"content": `<style>.a0b4-vb1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 21.616c12.844-1.903 14.02-1.558 15.058-2.077c2.596-5.193 3.635-15.058 10.385-12.981c2.596 1.038-2.596 8.308-2.596 12.462c4.673 0 12.98-1.039 14.02.519c1.508 4.046-10.112 4.434-16.097 6.23c-1.039 5.193-2.596 9.866-.52 15.578c-1.038 1.038-9.865 1.038-6.23-15.058c-10.385 2.596-13.5-.52-14.02-4.673");
}
</style><path class="a0b4-vb1q"/>`,
		"fallback": "arcticons:timo",
	});
}

export default Component;
