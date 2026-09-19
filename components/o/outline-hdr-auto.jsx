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
		"content": `<style>.r2rbjtbid {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-.99-14L6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6zm-.66 6.59l1.6-4.55h.09l1.6 4.55z");
}
</style><path class="r2rbjtbid"/>`,
		"fallback": "ic:outline-hdr-auto",
	});
}

export default Component;
