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
		"content": `<style>.x9dmvpbsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.263 17.871v12.48L20.212 43.5L9.737 37.26L27.12 24.111L9.737 10.74L20.211 4.5zl-11.143 6.24l11.143 6.24");
}
</style><path class="x9dmvpbsy"/>`,
		"fallback": "arcticons:measure",
	});
}

export default Component;
