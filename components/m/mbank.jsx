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
		"content": `<style>.h3lri0bez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.711 31.482V16.518H9.5m14.722 5.756a5.755 5.755 0 0 1 5.755-5.756h0a5.755 5.755 0 0 1 5.755 5.755v7.33c0 1.421 1.518 2.326 2.768 1.65h0");
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}

.z854uqbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.711 22.274a5.755 5.755 0 0 1 5.755-5.756h0a5.755 5.755 0 0 1 5.756 5.755v9.209");
}
</style><path class="z854uqbpv"/><path class="h3lri0bez"/><path class="ydqthzbbt"/>`,
		"fallback": "arcticons:mbank",
	});
}

export default Component;
