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
		"content": `<style>.anw_bmbif {
  cx: 39.073px;
  cy: 26.327px;
  r: 0.75px;
  fill: currentColor;
}

.h2yz19b4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.316 25.815c.431.564.972.774 1.724.774h1.04c.97 0 1.755-.788 1.755-1.761v-.008c0-.972-.786-1.76-1.754-1.76h-1.148a1.76 1.76 0 0 1-1.756-1.764h0c0-.975.788-1.766 1.76-1.766h1.035c.752 0 1.292.21 1.723.773m1.7 1.609v4.677m1.868-2.912c0-.975.787-1.765 1.758-1.765h0c.97 0 1.758.79 1.758 1.765v2.912m-3.516-4.677v4.677m3.516-2.912a1.76 1.76 0 0 1 1.757-1.765h0c.97 0 1.758.79 1.758 1.765v2.912m1.658-1.869c0 .975.787 1.765 1.758 1.765h0c.97 0 1.757-.79 1.757-1.765v-1.147c0-.975-.787-1.765-1.757-1.765h0c-.971 0-1.758.79-1.758 1.765m0-1.765v7.059m5.028-9.337v6.176a.88.88 0 0 0 .879.883h.263m4.249-.891c-.302.532-.873.89-1.527.89h0a1.76 1.76 0 0 1-1.757-1.764v-1.147c0-.975.787-1.765 1.757-1.765h0c.971 0 1.758.79 1.758 1.765v.573h-3.515");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.p8xtfubtm {
  cx: 16.395px;
  cy: 19.75px;
  r: 0.75px;
  fill: currentColor;
}
</style><rect class="j3s9ivbxi"/><path class="h2yz19b4t"/><circle class="p8xtfubtm"/><circle class="anw_bmbif"/>`,
		"fallback": "arcticons:simple-fitness",
	});
}

export default Component;
