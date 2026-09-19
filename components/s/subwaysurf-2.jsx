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
		"content": `<style>.mnno_xzpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.22 4.5h-8.44l-1.05 6.32h10.54z");
}

.nikvl5bke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.15 10.82h13.7A4.22 4.22 0 0 1 35.07 15v26.39A2.11 2.11 0 0 1 33 43.5H15a2.11 2.11 0 0 1-2.11-2.11V15a4.22 4.22 0 0 1 4.26-4.18");
}

.nk_lscf9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 9.16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12.93 18.2h22.14M12.93 38.23h22.14M19.45 25.897a4.554 4.554 0 0 1 5.453-4.462c1.908.367 3.431 2.016 3.621 3.95c.142 1.438-.314 2.857-1.307 3.73c-1.84 1.614-7.766 5.967-7.766 5.967h9.098");
}
</style><path class="nikvl5bke"/><path class="mnno_xzpl"/><path class="nk_lscf9j"/>`,
		"fallback": "arcticons:subwaysurf-2",
	});
}

export default Component;
