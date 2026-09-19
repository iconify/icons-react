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
		"content": `<style>.n0sozfbqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5c-3.805 2.021-11.415 6.183-11.415 6.183v12.841L24 30.183L12.585 36.84L24 43.5l11.415-6.659V23.524l-11.332-6.448l11.332-6.393z");
}
</style><path class="n0sozfbqg"/>`,
		"fallback": "arcticons:mensa-darmstadt",
	});
}

export default Component;
