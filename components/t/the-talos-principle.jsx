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

.di7p7v6vy {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 16.5px;
  ry: 21.5px;
}

.yi9q5manb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.5 19.328v9.344m-21-9.344v9.344m21-7.877h-21m21 6.41h-21");
}
</style><circle class="cpk0fnbgt"/><path class="yi9q5manb"/><ellipse class="di7p7v6vy"/>`,
		"fallback": "arcticons:the-talos-principle",
	});
}

export default Component;
