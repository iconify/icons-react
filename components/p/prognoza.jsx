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
		"content": `<style>.crxfmybei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.848 18.76c12.419 0 21.85 5.273 27.244 9.43c-1.928 10.104-11.164 18.162-23.014 17.233c-11.85-.93-19.517-11.502-19.517-20.31c0 0 4.235-6.352 15.287-6.352");
}

.edmjv3ktn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.894 24.166c1.388-9.906-3.846-19.15-12.686-20.706S6.796 6.29 6.796 21.408");
}
</style><path class="edmjv3ktn"/><path class="crxfmybei"/>`,
		"fallback": "arcticons:prognoza",
	});
}

export default Component;
