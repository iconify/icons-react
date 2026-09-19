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
		"content": `<style>.b3zxds-cb {
  fill: currentColor;
  d: path("M5.01 20.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zM17 20l-10 .01L5.89 10H18.1zm1.76-16l-.43 4H5.67l-.44-4zM12 19c1.66 0 3-1.34 3-3c0-2-3-5.4-3-5.4S9 14 9 16c0 1.66 1.34 3 3 3m0-5.09c.59.91 1 1.73 1 2.09c0 .55-.45 1-1 1s-1-.45-1-1c0-.37.41-1.19 1-2.09");
}

.up7zcebti {
  fill: currentColor;
  d: path("M7 20.01L17 20l1.1-10H5.89zm5-9.41s3 3.4 3 5.4c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-2 3-5.4 3-5.4");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="up7zcebti"/><path class="b3zxds-cb"/>`,
		"fallback": "ic:twotone-local-drink",
	});
}

export default Component;
