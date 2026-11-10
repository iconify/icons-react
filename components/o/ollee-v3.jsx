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
		"content": `<style>.i-f81ybtw {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  rx: 4px;
  ry: 4px;
}

.ysjcnomgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.063 23.808v6.526m0-7.947v-5.595m5.318 7.016v6.526m0-7.947v-5.595m2.667 4.678v3.596m4.604-3.596v3.596m-3.818-4.376h3.023m-3.023 0h3.023m-3.023 5.259h3.023m-3.023-5.259h3.023m-3.809 6.039v3.596m.786-4.376h3.023m-3.023 0h3.023m-3.023 5.259h3.023m-18.868-8.274h3.495m-3.495 8.274h3.495m-4.407-7.455v6.527m5.319-6.527v6.527m17.924-8.81v3.596m4.603-3.596v3.596m-3.818-4.376h3.023m-3.023 0h3.023m-3.023 5.259h3.023m-3.023-5.259h3.023m-3.808 6.039v3.596m.785-4.376h3.023m-3.023 0h3.023m-3.023 5.259h3.023");
}
</style><rect class="c i-f81ybtw"/><path class="ysjcnomgh"/>`,
		"fallback": "arcticons:ollee-v3",
	});
}

export default Component;
