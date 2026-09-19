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
		"content": `<style>.io94gnb0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9 18.5l3.25 11m3.25-11l-3.25 11m3.25-11l3.25 11m3.25-11l-3.25 11M13.23 14V8.5a4 4 0 0 1 4-4H38.5a4 4 0 0 1 4 4v31a4 4 0 0 1-4 4H17.23a4 4 0 0 1-4-4V34");
}

.oziro_2gv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M5.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2Z");
}
</style><path class="oziro_2gv"/><path class="io94gnb0p"/>`,
		"fallback": "arcticons:microsoft-word",
	});
}

export default Component;
