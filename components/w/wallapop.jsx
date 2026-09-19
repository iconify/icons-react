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
		"content": `<style>.i-mhd5brq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.664 23.704C2.129 27 4.606 42.884 19.5 38.048");
}

.pjt4e4gom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.861 18.718c9.61 4.143 2.882 16.499-3.33 15.496c.143 4.072-1.604 9.293-9.153 9.286c-4.003-.004-10.02-4.61-5.811-14.029");
}

.ryo6sk8sf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.283 25.17c-9.014-2.363-9.314-9.972-6.079-14.203c3.474-4.542 9.483-2.107 11.624-.4c1.87-6.213 11.089-9.286 18.704-1.136s-2.805 16.634-2.805 16.634");
}
</style><path class="ryo6sk8sf"/><path class="pjt4e4gom"/><path class="i-mhd5brq"/>`,
		"fallback": "arcticons:wallapop",
	});
}

export default Component;
