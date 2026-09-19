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
		"content": `<style>.d49golndp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.257 25.684l12.637 7.295V18.388zm31.488-14.173l-6.88-3.972v7.944z");
}

.phabijfgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 25.684L17.905 10.906v29.555zm-25.595-7.715L4.5 10.229v15.479z");
}
</style><path class="phabijfgl"/><path class="d49golndp"/>`,
		"fallback": "arcticons:turk-telekom",
	});
}

export default Component;
