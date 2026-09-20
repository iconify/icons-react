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
		"content": `<style>.cgroc__tr {
  fill: currentColor;
  d: path("M11.5 17.7L1.625 7.825l4.2-4.2L15.7 13.5zm0-2.8l1.4-1.4l-7.1-7.1l-1.4 1.4zm7.1 7.1l-4.25-4.25l1.4-1.4L20 20.6zM16.025 7.975Q15 6.95 15 5.5t1.025-2.475T18.5 2t2.475 1.025T22 5.5t-1.025 2.475T18.5 9t-2.475-1.025m3.538-1.412Q20 6.125 20 5.5t-.437-1.062T18.5 4t-1.062.438T17 5.5t.438 1.063T18.5 7t1.063-.437M8.65 10.65");
}
</style><path class="cgroc__tr"/>`,
		"fallback": "material-symbols:sports-cricket-outline-sharp",
	});
}

export default Component;
