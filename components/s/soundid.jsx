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
		"content": `<style>.jic6870rr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.71 20.216h26.579v7.568H10.71zm5.432 17.933l10.364-10.364l5.351 5.351L21.493 43.5zm0-23.284L26.506 4.5l5.351 5.351l-10.364 10.364z");
}
</style><path class="jic6870rr"/>`,
		"fallback": "arcticons:soundid",
	});
}

export default Component;
