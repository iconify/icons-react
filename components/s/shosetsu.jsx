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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mm4z2abpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.849 24.697H36.15c0 5.478-1.494 8.566-3.785 8.566h-3.934m2.74-20.418a17.8 17.8 0 0 1 4.88 3.585");
}

.vvp9aqn9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.755 11.5v25m-9.064-19.323h18.128v7.52");
}
</style><path class="vvp9aqn9r"/><path class="mm4z2abpf"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:shosetsu",
	});
}

export default Component;
