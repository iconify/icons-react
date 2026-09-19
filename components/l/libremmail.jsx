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
		"content": `<style>.dbvbmbcgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.485 14.854l10.96 10.96a4.966 4.966 0 0 0 7.023.01l.01-.01l11.007-11.007m-.215 18.386l-9.941-8.146M9.747 33.193l9.941-8.146");
}

.o3sydf0cx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.66v18.68a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4V14.66a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4");
}
</style><path class="o3sydf0cx"/><path class="dbvbmbcgn"/>`,
		"fallback": "arcticons:libremmail",
	});
}

export default Component;
