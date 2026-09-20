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
		"content": `<style>.a5z4kpb0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.432 28v-8h2.618c1.481 0 2.681 1.203 2.681 2.687s-1.2 2.686-2.68 2.686h-2.62M17.8 20v5.35a2.65 2.65 0 1 0 5.3 0V20m5.318 4a2 2 0 1 1 0 4h-3.3v-8h3.3a2 2 0 1 1 0 4m0 0h-3.3m12.451-1.35a2.65 2.65 0 1 0-5.3 0v2.7a2.65 2.65 0 1 0 5.3 0h-2.65M42.5 19h1m-1 10h1m-39-10h1m-1 10h1");
}

.bg0w8yb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 12.5h-33c-1.1 0-2 .9-2 2v19c0 1.1.9 2 2 2h33c1.1 0 2-.9 2-2v-19c0-1.1-.9-2-2-2");
}
</style><path class="bg0w8yb7c"/><path class="a5z4kpb0o"/>`,
		"fallback": "arcticons:pubg",
	});
}

export default Component;
