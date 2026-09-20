import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hq7dpfq-t {
  fill: currentColor;
  d: path("M12 15.135q-2.154 0-3.673-1.517t-1.52-3.687q0-1.35.6-2.533t1.461-2.186t1.814-1.81T12.346 2q.385 1.156.974 1.939q.59.782 1.476 1.536q1.302 1.092 1.85 2.147q.546 1.055.546 2.29q0 2.19-1.519 3.706T12 15.135m2.97-2.22q1.222-1.22 1.222-3.003q0-.99-.492-1.894t-1.698-1.903q-.66-.536-1.166-1.122t-.932-1.385Q9.64 5.483 8.724 6.973t-.916 2.958q0 1.763 1.223 2.984q1.223 1.22 2.969 1.22t2.97-1.22M5 20l.473-1.317q.162-.452.533-.722t.848-.269h10.292q.477 0 .848.27t.533.72L19 20z");
}
</style><path class="hq7dpfq-t"/>`,
		"fallback": "material-symbols-light:stylus-brush-outline",
	});
}

export default Component;
