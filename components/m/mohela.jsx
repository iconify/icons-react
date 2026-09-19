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
		"content": `<style>.h9sg3ssse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.574 20.965v6.07h3.034M8 27.028v-6.063l3.035 6.07l3.034-6.06v6.06m7.33-6.07v6.07m4.021-6.07v6.07m-4.021-3.046h4.021m1.678.011h1.978m1.056 3.035h-3.034v-6.07h3.034");
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

.sc61vwahj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.334 25.024h-2.689m-.666 2.011l2.011-6.07l2.01 6.07");
}

.v0o5axb3m {
  width: 4.021px;
  height: 6.069px;
  x: 15.724px;
  y: 20.965px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.01px;
  ry: 2.01px;
}
</style><path class="h9sg3ssse"/><rect class="v0o5axb3m"/><path class="sc61vwahj"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:mohela",
	});
}

export default Component;
