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
		"content": `<style>.f46en9b2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.358 8.465h2.778v30.7h-2.778z");
}

.ih9g1gbal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.04 8.473l-.756 31.862L31.77 43.5l3.982-2.726h3.964V6.736h-3.964L31.77 4.5L9.342 8.465");
}
</style><path class="ih9g1gbal"/><path class="f46en9b2g"/>`,
		"fallback": "arcticons:khatabook",
	});
}

export default Component;
