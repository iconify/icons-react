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
		"content": `<style>.rq1r9fbne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.878 14.446L35.122 4.5v27.878c0 6.143-4.98 11.122-11.122 11.122h0c-6.142 0-11.122-4.98-11.122-11.122z");
}

.srton1ban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.353 7.974V31.02a7.24 7.24 0 0 1-7.237 7.238h0a7.24 7.24 0 0 1-7.238-7.238");
}

.vqf-a-dyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.469 9.71v21.048a5.295 5.295 0 0 1-5.296 5.295h0a5.295 5.295 0 0 1-5.295-5.295");
}

.ye7nk6b_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.238 6.237v25.732a9.18 9.18 0 0 1-9.18 9.18h0a9.18 9.18 0 0 1-9.18-9.18");
}
</style><path class="rq1r9fbne"/><path class="vqf-a-dyg"/><path class="srton1ban"/><path class="ye7nk6b_s"/>`,
		"fallback": "arcticons:uhc",
	});
}

export default Component;
