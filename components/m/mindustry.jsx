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
		"content": `<style>.tg19nbb3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.316 25.51l-4.53 4.531H5.5V17.959h5.286l4.53 4.531zm17.368-3.02l4.53-4.531H42.5v12.082h-5.286l-4.53-4.531zm-7.174-7.174h2.643l4.53 4.53v8.307l-4.53 4.53h-8.306l-4.53-4.53v-8.306l4.53-4.53h2.643m0-.001l-4.531-4.53V5.5h12.082v5.286l-4.531 4.53zm3.02 17.368l4.531 4.53V42.5H17.959v-5.286l4.531-4.53z");
}

.yrw2ssbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.01 15.316v6.4l-.788.788h-2.444l-.788-.788v-6.4");
}
</style><path class="tg19nbb3d"/><path class="yrw2ssbrx"/>`,
		"fallback": "arcticons:mindustry",
	});
}

export default Component;
