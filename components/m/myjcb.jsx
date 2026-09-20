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
		"content": `<style>.qj2vznuon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.057 14.881v2.39c0 .8-.653 1.448-1.46 1.448s-1.46-.648-1.46-1.448v-2.39m-7.394 3.831v-5.786l2.92 5.793l2.919-5.784v5.784m-2.357 10.328v10.087c0 1.857-1.464 3.363-3.271 3.363s-3.272-1.506-3.272-3.363v-1.116m19.651-.032v.055c0 2.461-1.94 4.456-4.334 4.456s-4.335-1.995-4.335-4.456v-4.539c0-2.46 1.94-4.455 4.335-4.455s4.334 1.995 4.334 4.455v.055m9.837 2.214c1.807 0 3.272 1.506 3.272 3.363s-1.465 3.362-3.272 3.362h-5.398v-13.45h5.398c1.807 0 3.272 1.505 3.272 3.363s-1.465 3.362-3.272 3.362m0 0h-5.398");
}

.yyy3oidhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.057 17.271v1.955c0 .8-.653 1.449-1.46 1.449a1.46 1.46 0 0 1-1.032-.425");
}

.zw77w1bvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.558 26.233c0-18.489 2.241-20.73 20.73-20.73c0 18.49-2.24 20.73-20.73 20.73");
}
</style><path class="zw77w1bvy"/><path class="yyy3oidhs"/><path class="qj2vznuon"/>`,
		"fallback": "arcticons:myjcb",
	});
}

export default Component;
