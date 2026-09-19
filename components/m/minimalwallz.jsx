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
		"content": `<style>.b1ccbcb6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.742 30.825l6.565 6.565l15.484-15.484");
}

.breb99b4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.209 40.359L24 24.567L8.209 8.776zm22.356-9.227l9.226 9.227V8.776L24 24.567");
}
</style><path class="breb99b4o"/><path class="b1ccbcb6g"/>`,
		"fallback": "arcticons:minimalwallz",
	});
}

export default Component;
