import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h1h1whk8f {
  fill: currentColor;
  d: path("M4 22V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v18zm11.5-8.5q.625 0 1.063-.437T17 12t-.437-1.062T15.5 10.5t-1.062.438T14 12t.438 1.063t1.062.437");
}
</style><path class="h1h1whk8f"/>`,
		"fallback": "material-symbols:sensor-door",
	});
}

export default Component;
