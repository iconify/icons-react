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
		"content": `<style>.c3yft6v0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.38 22.034L6.769 18.975A17.95 17.95 0 0 1 18.92 6.785l3.079 10.607a6.9 6.9 0 0 0-4.618 4.642m23.883 6.882l-10.613-3.058a6.9 6.9 0 0 1-4.803 4.795l3.08 10.607a17.95 17.95 0 0 0 12.336-12.344");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vqogbbbht {
  cx: 24px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}

.vsqfefzoj {
  cx: 24px;
  cy: 24px;
  r: 6.904px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vsqfefzoj"/><circle class="cpk0fnbgt"/><circle class="vqogbbbht"/><path class="c3yft6v0z"/>`,
		"fallback": "arcticons:tempus",
	});
}

export default Component;
