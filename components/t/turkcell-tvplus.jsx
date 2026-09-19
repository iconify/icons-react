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
		"content": `<style>.bgg7p82nf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M14.091 33.286v-13.86");
}

.sd1dj_oxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.904 22.555l-4.024 10.73l-4.776-12.735a1.73 1.73 0 0 0-1.622-1.124H9.5m19.577 0H38.5m-4.711-4.712v9.423");
}
</style><path class="bgg7p82nf"/><path class="sd1dj_oxk"/>`,
		"fallback": "arcticons:turkcell-tvplus",
	});
}

export default Component;
