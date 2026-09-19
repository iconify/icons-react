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
		"content": `<style>.zbk-49b8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.53 19.197v9.607L4.5 24zM28.145 24c0 2.475-1.934 4.481-4.32 4.481h0c-2.385 0-4.32-2.006-4.32-4.481h0c0-2.475 1.935-4.481 4.32-4.481h0c2.386 0 4.32 2.006 4.32 4.481m7.553-4.047H43.5v8.093h-7.802z");
}
</style><path class="zbk-49b8j"/>`,
		"fallback": "arcticons:virtual-soft-keys",
	});
}

export default Component;
