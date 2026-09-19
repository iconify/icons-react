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

.fsj-g0rki {
  cx: 24px;
  cy: 34.748px;
  r: 0.75px;
  fill: currentColor;
}

.xlklamblh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.975 30.275V12.502");
}
</style><circle class="fsj-g0rki"/><path class="xlklamblh"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:symbol-exclamation-mark",
	});
}

export default Component;
