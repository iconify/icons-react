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
		"content": `<style>.affoqpbgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.055 43.5h-18.11a4 4 0 0 1-3.973-3.537l-2.588-22.19h31.232l-2.588 22.19a4 4 0 0 1-3.973 3.537M13.352 17.773V15.16a10.66 10.66 0 0 1 21.32 0v2.613");
}

.rwpnd7bhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.529 36.983c1.154.865 2.308 1.153 4.615 1.153h1.154a3.75 3.75 0 0 0 0-7.5h-2.596a3.75 3.75 0 0 1 0-7.5h1.154c2.596 0 3.75.289 4.615 1.154");
}
</style><path class="affoqpbgs"/><path class="rwpnd7bhg"/>`,
		"fallback": "arcticons:shopee",
	});
}

export default Component;
