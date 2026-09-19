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
		"content": `<style>.cy-d7_i0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4");
}

.xm5ekukqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 27.776V19.91h2.575c1.456 0 2.636 1.183 2.636 2.642s-1.18 2.642-2.636 2.642H9.5m14.585-5.049l-1.966 7.866l-1.967-7.866l-1.966 7.866l-1.967-7.866m9.878.079h5.211m-2.605 7.866v-7.866m4.586-.084v7.866M38.5 20.14v7.866m-5.211-3.948H38.5m-26.831 1.173l2.575 2.58");
}
</style><path class="cy-d7_i0l"/><path class="xm5ekukqc"/>`,
		"fallback": "arcticons:rwthapp",
	});
}

export default Component;
