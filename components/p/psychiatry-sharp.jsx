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
		"content": `<style>.p5buxo2_i {
  fill: currentColor;
  d: path("M11.5 20.5v-7.898q-1.408 0-2.69-.526T6.536 10.56T5.034 8.275T4.52 5.577v-1h1q1.377 0 2.666.537q1.29.538 2.273 1.525q.794.794 1.287 1.805t.653 2.139q.221-.425.496-.8q.275-.373.623-.721q.988-.987 2.283-1.525T18.5 7h1v1q0 1.406-.538 2.701t-1.526 2.284t-2.258 1.502T12.5 15v5.5z");
}
</style><path class="p5buxo2_i"/>`,
		"fallback": "material-symbols-light:psychiatry-sharp",
	});
}

export default Component;
