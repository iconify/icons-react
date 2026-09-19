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
		"content": `<style>.b3r9-0byr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.573 14.01l-11.63 11.63l-5.516-5.517a1 1 0 0 0-1.414 0l-3.114 3.114a1 1 0 0 0 0 1.414l9.338 9.338a1 1 0 0 0 1.414 0l15.45-15.45a1 1 0 0 0 0-1.414l-3.113-3.114a1 1 0 0 0-1.415 0");
}

.o8yphvp0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24m-14.33-8.59V3.74m0 20.73v19.79m-14.34 0V30.58m0-9.06V3.74m27.43 27.43H24.47m-7.05 0H3.74m0-14.34h26.01m14.51 0h-7.45");
}
</style><path class="b3r9-0byr"/><path class="o8yphvp0u"/>`,
		"fallback": "arcticons:lunatask",
	});
}

export default Component;
