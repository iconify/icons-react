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
		"content": `<style>.a_emxdbli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 13.25l9.31 5.375v10.75L24 34.75l-9.31-5.375v-10.75z");
}

.gimzce03b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.69 18.625L24 24l9.31-5.375M24 24v10.75m-9.31-5.375L5.38 34.75m27.93-5.375l9.31 5.375M24 2.5v10.75");
}

.ihvqhub0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 2.5l18.62 10.75v21.5L24 45.5L5.38 34.75v-21.5z");
}
</style><path class="a_emxdbli"/><path class="ihvqhub0d"/><path class="gimzce03b"/>`,
		"fallback": "arcticons:kuario",
	});
}

export default Component;
