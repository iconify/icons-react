import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.seqb38bvt {
  fill: currentColor;
  d: path("M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10s10-4.477 10-10m-2 0a8 8 0 0 1-12.906 6.32L16.32 5.094A7.97 7.97 0 0 1 18 10m-3.094-6.32L3.68 14.906A8 8 0 0 1 14.906 3.68");
}
</style><path class="seqb38bvt"/>`,
		"fallback": "fluent:presence-blocked-20-regular",
	});
}

export default Component;
