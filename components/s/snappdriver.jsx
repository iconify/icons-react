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

.mzqvfibph {
  d: path("m31.435 7.759l-3.868 14.67c-.927 3.517-1.501 6.386-5.181 6.421l-3.598.034l5.66-21.119z");
}

.spozitbti {
  cx: 21.211px;
  cy: 36.036px;
  r: 4.251px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><circle class="spozitbti"/><path class="mzqvfibph"/></g>`,
		"fallback": "arcticons:snappdriver",
	});
}

export default Component;
