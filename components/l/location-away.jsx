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
		"content": `<style>.guhegquya {
  fill: currentColor;
  d: path("M10 21v-1.9q0-.525.263-.987t.712-.738q1.15-.675 2.413-1.025T16 16t2.613.35t2.412 1.025q.45.275.713.738T22 19.1V21zm-8 0V9l8-6l5.375 4.05q-1.875.225-3.125 1.638T11 12q0 .775.213 1.463t.612 1.287q-.5.2-.962.413t-.913.487q-.9.525-1.425 1.463T8 19.1V21zm11.875-6.875Q13 13.25 13 12t.875-2.125T16 9t2.125.875T19 12t-.875 2.125T16 15t-2.125-.875");
}
</style><path class="guhegquya"/>`,
		"fallback": "material-symbols:location-away",
	});
}

export default Component;
