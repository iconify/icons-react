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
		"content": `<style>.gr5sxbclu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.449 12.955h4.349a4.896 4.896 0 0 1 4.894 4.894a4.896 4.896 0 0 1-4.894 4.894h-4.35zm0 0L10.816 4.5m8.633 18.243l-8.633 7.056m17.545-13.718l6.63-5.578m-1.246 16.264l-6.125-5.863");
}

.j7-cbbc4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.854 4.5H10.816v39h8.633V31.16h4.405c7.362 0 13.33-5.968 13.33-13.33S31.217 4.5 23.855 4.5");
}
</style><path class="j7-cbbc4y"/><path class="gr5sxbclu"/>`,
		"fallback": "arcticons:pixel-launcher",
	});
}

export default Component;
