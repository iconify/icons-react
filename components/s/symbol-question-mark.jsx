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
		"content": `<style>.c1o14hbwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.08 19.423c0-1.911.774-3.641 2.027-4.894s2.982-2.027 4.893-2.027a6.92 6.92 0 0 1 6.92 6.92c0 1.912-.645 3.786-2.027 4.894c-1.432 1.149-4.918 3.031-4.918 5.96");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fsj-g0rki {
  cx: 24px;
  cy: 34.748px;
  r: 0.75px;
  fill: currentColor;
}
</style><circle class="fsj-g0rki"/><path class="c1o14hbwp"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:symbol-question-mark",
	});
}

export default Component;
