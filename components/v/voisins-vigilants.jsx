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
		"content": `<style>.bk6ptoupl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18.338A5.66 5.66 0 0 0 18.338 24A5.66 5.66 0 0 0 24 29.662A5.66 5.66 0 0 0 29.662 24a5.7 5.7 0 0 0-.304-1.823a2.5 2.5 0 0 1-1.198.311a2.51 2.51 0 0 1-2.509-2.509a2.5 2.5 0 0 1 .353-1.272a5.7 5.7 0 0 0-2.004-.37");
}

.wyspkubag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24C40.17 30.39 33.243 36.67 24 36.67S7.83 30.39 2.5 24m4.694-5.043C11.75 14.67 17.26 11.33 24 11.33s12.25 3.34 16.806 7.627");
}
</style><path class="wyspkubag"/><path class="bk6ptoupl"/>`,
		"fallback": "arcticons:voisins-vigilants",
	});
}

export default Component;
