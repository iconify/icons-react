import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qq-dplb3p {
  fill: currentColor;
  d: path("M21.334 3.128a.75.75 0 0 1 .202 1.041L7.709 24.67a.75.75 0 0 1-1.243-.84L20.292 3.331a.75.75 0 0 1 1.041-.203M7.5 4.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M2.5 8a5 5 0 1 1 10 0a5 5 0 0 1-10 0M17 20a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m3.5-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10");
}
</style><path class="qq-dplb3p"/>`,
		"fallback": "fluent:text-percent-28-regular",
	});
}

export default Component;
