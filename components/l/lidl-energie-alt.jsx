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
		"content": `<style>.ce1uc0b5b {
  cx: 39px;
  cy: 39px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d_a40jbbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.278 19.909v8.687h3.794m13.656 0V19.91h1.954a3.8 3.8 0 0 1 3.801 3.799v1.087a3.8 3.8 0 0 1-3.799 3.801h-.001zm-11.544-4.274l4.414-4.414l4.414 4.414l-4.414 4.415zm4.414 4.415l-1.181 1.181m6.777-6.776l-1.182 1.181m-8.828 0l-1.181 1.181");
}

.ie5snid1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.405 19.909h1.745m-1.745 8.687h.873m16.577 0h.873m-.873-8.687h.873m7.945 0v8.687h3.795M34.8 19.909h1.745M34.8 28.596h.873m1.475 10.406h2.282m1.218 3.5h-3.5v-7h3.5");
}

.p8gbj245k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.361 32.643c4.768-9.03 1.312-20.215-7.718-24.982S12.428 6.347 7.661 15.377c-4.768 9.03-1.312 20.215 7.717 24.983a18.49 18.49 0 0 0 17.221.023");
}

.qdd6-2b6z {
  cx: 20.008px;
  cy: 15.82px;
  r: 2.401px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vuj67fbmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 33.525V5.5h-37v37h28.023");
}
</style><path class="vuj67fbmq"/><path class="p8gbj245k"/><circle class="ce1uc0b5b"/><path class="d_a40jbbx"/><circle class="qdd6-2b6z"/><path class="ie5snid1a"/>`,
		"fallback": "arcticons:lidl-energie-alt",
	});
}

export default Component;
