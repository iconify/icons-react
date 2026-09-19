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
		"content": `<style>.fcyco1mit {
  cx: 27.238px;
  cy: 26.437px;
  r: 12.652px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hszo_acky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.581 15.203V37.76");
}

.rudkgengt {
  cx: 8.243px;
  cy: 19.821px;
  r: 1.373px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v9dmbdbwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.887 37.76h7.7a2.913 2.913 0 0 0 2.913-2.913v-15.04a4.57 4.57 0 0 0-2.928-4.268l-4.647-1.792c-.372-3.932-2.807-4.835-2.807-4.835H21.421s-2.435.903-2.807 4.834L8.147 15.914A4.574 4.574 0 0 0 4.5 20.392v14.455a2.913 2.913 0 0 0 2.913 2.913H21.59");
}
</style><circle class="fcyco1mit"/><path class="v9dmbdbwq"/><circle class="rudkgengt"/><path class="hszo_acky"/>`,
		"fallback": "arcticons:lineage-camera",
	});
}

export default Component;
