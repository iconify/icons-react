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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.r87qfbcyw {
  d: path("M11 7H7.517l2.402 5.606a1 1 0 0 1 .004.779a4.25 4.25 0 0 1-7.846 0a1 1 0 0 1 .004-.779l3-7A1 1 0 0 1 6 5h5V3a1 1 0 0 1 2 0v2h5c.4 0 .762.238.919.606l3 7a1 1 0 0 1 .004.779a4.251 4.251 0 0 1-7.846 0a1 1 0 0 1 .004-.779L16.483 7H13v13h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3Zm-6.896 5.964a2.254 2.254 0 0 0 3.792 0L6 8.539Zm12 0a2.254 2.254 0 0 0 3.792 0L18 8.539Z");
}

.wnlf9dbhp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m6.919 5.606l3 7a1 1 0 0 1 .004.779a4.25 4.25 0 0 1-7.846 0a1 1 0 0 1 .004-.779l3-7a.999.999 0 0 1 1.838 0m12 0l3 7a1 1 0 0 1 .004.779a4.251 4.251 0 0 1-7.846 0a1 1 0 0 1 .004-.779l3-7a.999.999 0 0 1 1.838 0");
}
</style><g class="cuyn6tgcc"><path class="wnlf9dbhp"/><path class="r87qfbcyw"/></g>`,
		"fallback": "coolicons:scale-bulk-sharp",
	});
}

export default Component;
