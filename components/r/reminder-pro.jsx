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
		"content": `<style>.l7d0m6oan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.072 9.13c-.087 2.34.347 13.526 11.792 18.121c.433.174.954.26 1.474.26c3.034-.173 15-.26 19.075 6.157c.087.087.087.173.087.26v4.595c0 .26-.173.434-.433.434h-27.92c-.26 0-.434-.174-.434-.434v-7.977c0-.26-.086-.433-.346-.52c-1.734-1.214-11.186-7.543-9.711-20.983z");
}

.ymsmxbbjn {
  cx: 28.066px;
  cy: 16.326px;
  r: 6.936px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ymsmxbbjn"/><path class="l7d0m6oan"/>`,
		"fallback": "arcticons:reminder-pro",
	});
}

export default Component;
