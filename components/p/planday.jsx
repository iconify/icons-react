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
		"content": `<style>.kr120406v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 34.367l12.315-14.49m13.406 9.7c6.83-8.769-4.973-20.004-13.406-9.7m13.406 9.7c-4.858 4.858-10.44 2.327-13.05-.737m13.272.46L43.5 13.634");
}
</style><path class="kr120406v"/>`,
		"fallback": "arcticons:planday",
	});
}

export default Component;
