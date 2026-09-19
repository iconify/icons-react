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
		"content": `<style>.wd5f8tobv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.246 7.816H9.99a3 3 0 0 0-3 3v28.02a3 3 0 0 0 3 3h28.02a3 3 0 0 0 3-3v-28.02a3 3 0 0 0-3-3H27.754M41.01 37.723l-13.65-11.17m-3.375 5.693l11.692 9.59");
}

.zqdb_2buv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.266 41.836L26.682 29.99a1.97 1.97 0 0 0 .725-1.529v-2.02l-.038-11.528h6.893L24.005 3.836L13.75 14.913h6.892v11.59L6.99 37.67");
}
</style><path class="wd5f8tobv"/><path class="zqdb_2buv"/>`,
		"fallback": "arcticons:photo-affix",
	});
}

export default Component;
