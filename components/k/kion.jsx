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
		"content": `<style>.wduo3tydo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.167 20h14v8h-14zM43.5 20v8l-8-8v8m-20.667-8v8M4.5 20v8m7-8L8 24l3.5 4M8 24H4.5");
}
</style><path class="wduo3tydo"/>`,
		"fallback": "arcticons:kion",
	});
}

export default Component;
