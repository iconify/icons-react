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
		"content": `<style>.kqxlr3b_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.976 29.997v9.488L30.583 24L13.976 8.515v9.488");
}

.nbbr1f38w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.711 34.137V43.5L39.759 24L19.711 4.5v9.363");
}

.ucrft-blu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.259 24L8.241 12.529v22.942z");
}
</style><path class="ucrft-blu"/><path class="kqxlr3b_s"/><path class="nbbr1f38w"/>`,
		"fallback": "arcticons:ndax",
	});
}

export default Component;
