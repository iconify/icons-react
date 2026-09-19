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
		"content": `<style>.fp79u_erb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.023 31.208L6.57 22.755a7.03 7.03 0 0 1 0-9.96a7.03 7.03 0 0 1 9.96 0l12.451 12.45a7.02 7.02 0 0 1 2.069 5.068");
}

.lhesuhbwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.414 18.851l6.057-6.057a7.03 7.03 0 0 1 9.96 0a7.03 7.03 0 0 1 0 9.96l-12.45 12.452a7.03 7.03 0 0 1-9.961 0a7.03 7.03 0 0 1 0-9.96v0l3.565-3.566");
}
</style><path class="lhesuhbwg"/><path class="fp79u_erb"/>`,
		"fallback": "arcticons:lynk-taxis",
	});
}

export default Component;
