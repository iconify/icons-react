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
		"content": `<style>.jk63skmys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.196 22.261c-1.186-.175-2.265.456-2.265 2.202v.413a2.696 2.696 0 1 0 5.393 0v-1.752a2.696 2.696 0 0 0-2.696-2.697c-1.282 0-1.801.272-2.516 1.05m-7.883-4.69v10.786m0-4.449a2.696 2.696 0 1 1 5.393 0v4.449m-12.286-.603c.492.413 1.024.603 2.218.603h.605c.984 0 1.782-.8 1.782-1.787S14.143 24 13.16 24h-1.21c-.985 0-1.783-.8-1.783-1.786c0-.987.798-1.787 1.783-1.787h.605c1.193 0 1.725.19 2.217.603m17.668 3.846a2.696 2.696 0 1 0 5.393 0v-1.752a2.696 2.696 0 1 0-5.393 0m.001-2.697v10.786");
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}
</style><path class="ll0g54h-q"/><path class="jk63skmys"/>`,
		"fallback": "arcticons:shop",
	});
}

export default Component;
