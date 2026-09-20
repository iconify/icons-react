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
		"content": `<style>.nt9tlcbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.711 22.274a5.755 5.755 0 0 1 11.51 0v9.208m-11.51 0V16.518H9.5m14.722 5.756a5.755 5.755 0 0 1 11.51 0v7.33c0 1.42 1.518 2.325 2.768 1.65");
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}
</style><path class="nt9tlcbih"/><path class="ydqthzbbt"/>`,
		"fallback": "arcticons:mbank",
	});
}

export default Component;
