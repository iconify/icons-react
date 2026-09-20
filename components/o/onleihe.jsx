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
		"content": `<style>.bg9s98brw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.5 26.859l-3.38-9.284a5.988 5.988 0 1 0-11.254 4.096l3.38 9.284m-3.379-9.284l-2.048-5.627");
}

.t6um1t7kw {
  width: 11.976px;
  height: 15.868px;
  x: 10.167px;
  y: 18.614px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.988px;
  ry: 5.988px;
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}
</style><path class="ydqthzbbt"/><rect transform="rotate(-20 16.155 26.549)" class="t6um1t7kw"/><path class="bg9s98brw"/>`,
		"fallback": "arcticons:onleihe",
	});
}

export default Component;
