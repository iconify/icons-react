import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l74euirpv {
  fill: currentColor;
  d: path("M8.237 1.56a.5.5 0 0 0-.474 0L1.789 4.777A1.5 1.5 0 0 0 1 6.097V12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.097a1.5 1.5 0 0 0-.789-1.32zM2.263 5.657L8 2.567l5.737 3.09a.5.5 0 0 1 .157.133L8 8.933L2.106 5.79a.5.5 0 0 1 .157-.133M2 6.867L7.765 9.94a.5.5 0 0 0 .47 0L14 6.867V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z");
}
</style><path class="l74euirpv"/>`,
		"fallback": "fluent:mail-read-16-regular",
	});
}

export default Component;
