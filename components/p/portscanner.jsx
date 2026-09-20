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
		"content": `<style>.bpshnu27m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.373 32.5l3.028-17h5.565c3.147 0 5.242 2.556 4.68 5.71s-3.567 5.709-6.714 5.709h-5.565m13.307 3.718c.8 1.357 2.017 1.863 3.836 1.863h2.517c2.342 0 4.58-1.903 4.998-4.25S34.883 24 32.54 24h-2.78c-2.343 0-3.903-1.903-3.485-4.25s2.656-4.25 4.998-4.25h2.517c1.819 0 3.036.505 3.836 1.863");
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}
</style><path class="ll0g54h-q"/><path class="bpshnu27m"/>`,
		"fallback": "arcticons:portscanner",
	});
}

export default Component;
