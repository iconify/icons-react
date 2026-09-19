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

.hph01vbsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.16 30.79l11.878 6.86V24.021l-11.878-6.86zm11.879 6.86l11.801-6.811V17.21l-11.802 6.811zM12.16 30.79v11.155m.04-24.805l-9.66 5.576M23.962 10.35l-9.629-5.56m21.511 12.42V6.055m-.041 24.805l9.661-5.576M24.039 37.65l9.628 5.56");
}

.oolsii1em {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.16 17.161l11.878 6.86L35.84 17.21l-11.879-6.86z");
}
</style><circle class="cpk0fnbgt"/><path class="oolsii1em"/><path class="hph01vbsi"/>`,
		"fallback": "arcticons:lifebox",
	});
}

export default Component;
