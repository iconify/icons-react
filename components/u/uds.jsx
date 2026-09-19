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
		"content": `<style>.c0vcnmkqb {
  cx: 38px;
  cy: 10.25px;
  r: 4.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uqwprnb6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5S42.5 34.217 42.5 24v-6H34v6c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10h6V5.5z");
}
</style><path class="uqwprnb6j"/><circle class="c0vcnmkqb"/>`,
		"fallback": "arcticons:uds",
	});
}

export default Component;
