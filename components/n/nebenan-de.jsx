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
		"content": `<style>.b1nalob-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5L7.556 13.722L24 21.944l16.444-8.222zv37");
}

.unwr21blo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.444 13.722v20.556l-4.11 2.055v-8.222l-8.223 4.111v8.222L24 42.5l-4.111-2.056v-8.222l-8.222-4.11v8.221l-4.111-2.055V13.722");
}
</style><path class="b1nalob-j"/><path class="unwr21blo"/>`,
		"fallback": "arcticons:nebenan-de",
	});
}

export default Component;
