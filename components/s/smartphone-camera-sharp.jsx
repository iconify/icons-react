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
		"content": `<style>.x7qw35bpu {
  fill: currentColor;
  d: path("M6 22V2h12v3.5H7v13h11V22zm7.308-6.577v-5.98h2.134l.866-.866H18l.857.865H21v5.981zm3.846-1.5q.61 0 1.055-.445t.445-1.058t-.445-1.045t-1.055-.433t-1.055.433t-.445 1.045q0 .613.445 1.058t1.055.445");
}
</style><path class="x7qw35bpu"/>`,
		"fallback": "material-symbols-light:smartphone-camera-sharp",
	});
}

export default Component;
