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
		"content": `<style>.dbtmipl6y {
  cx: 28.627px;
  cy: 40.122px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jhkgzvbnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.228 22.103h13.514l-2.253 4.504H14.48l-1.126 2.253h13.514c7.883 0 9.01-3.66 0-9.01c-9.29-5.348 4.223-19.144 12.67-14.357l-2.253 4.504c-6.756-1.97-10.135 3.942-2.533 8.165c7.32 4.223 7.883 16.329-5.349 16.328H9.033c-.525 0-1.043-.564-.898-1.118l.832-4.083l1.01-4.934c.23-1.125 1.126-2.253 2.252-2.253z");
}

.jqyms83vg {
  cx: 15.888px;
  cy: 40.122px;
  r: 3.378px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jqyms83vg"/><circle class="dbtmipl6y"/><path class="jhkgzvbnb"/>`,
		"fallback": "arcticons:sendo",
	});
}

export default Component;
