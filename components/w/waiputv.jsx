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
		"content": `<style>.n2_tg_ent {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.434 40.872l12.83-7.564a5.65 5.65 0 0 0 2.779-4.864v-15.64c0-5.099-5.542-8.265-9.934-5.676l-12.83 7.564A5.65 5.65 0 0 0 4.5 19.556v15.64c0 5.099 5.542 8.265 9.934 5.676");
}

.zg2602bba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.891 40.872l12.83-7.564a5.65 5.65 0 0 0 2.779-4.864v-15.64c0-5.099-5.542-8.265-9.934-5.676l-12.83 7.564a5.65 5.65 0 0 0-2.779 4.864v15.64c0 5.099 5.542 8.265 9.934 5.676");
}
</style><path class="n2_tg_ent"/><path class="zg2602bba"/>`,
		"fallback": "arcticons:waiputv",
	});
}

export default Component;
