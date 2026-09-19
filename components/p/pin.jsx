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
		"content": `<style>.gsohzcbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 17.83a4.35 4.35 0 0 0 6.17 0l9.25 9.25l-3.09 3.09a4.36 4.36 0 0 0 0 6.16l7.71-7.71L39.42 42.5h3.08v-3.08L28.62 25.54L30.17 24l3.08-3.08l3.08-3.09a4.36 4.36 0 0 0-6.16 0l-3.09 3.09l-9.25-9.25a4.35 4.35 0 0 0 0-6.17l-3.08 3.08l-6.17 6.17Zm23.12 7.71l-3.08 3.08");
}
</style><path class="gsohzcbxh"/>`,
		"fallback": "arcticons:pin",
	});
}

export default Component;
