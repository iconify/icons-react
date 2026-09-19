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
		"content": `<style>.al2mlrb0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5v39m-4.988-28.57v18.14m9.976-18.14v18.14M14.023 19.692v8.616m19.954-8.616v8.616M9.035 21.733v4.535m29.93-4.535v4.535");
}
</style><path class="al2mlrb0r"/>`,
		"fallback": "arcticons:soundbrenner",
	});
}

export default Component;
