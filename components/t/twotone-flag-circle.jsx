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
		"content": `<style>.h58dnjnea {
  fill: currentColor;
  d: path("m15 9l-1-2H8v11h1.5v-5H12l1 2h5V9zm1.5 4.5h-2.57l-1-2H9.5v-3h3.57l1 2h2.43z");
}

.i2o133b3i {
  fill: currentColor;
  d: path("M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m1 11l-1-2H9.5v5H8V7h6l1 2h3v6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zsfw75g9a {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8");
}
</style><path class="i2o133b3i"/><path class="zsfw75g9a"/><path class="h58dnjnea"/>`,
		"fallback": "ic:twotone-flag-circle",
	});
}

export default Component;
