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
		"content": `<style>.fmk1h2biy {
  cx: 26.804px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 18.696px;
  ry: 19.333px;
}

.q47mpdnwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.39 6.331v35.342M2.5 25.885l4.907-1.883h1.18l.223.211h36.688m-11.11 17.461l.509 1.316");
}
</style><ellipse class="fmk1h2biy"/><path class="q47mpdnwd"/>`,
		"fallback": "arcticons:the-genesis-order",
	});
}

export default Component;
