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
		"content": `<style>.t92bq76dl {
  fill: currentColor;
  d: path("M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7c0-.265.105-.52.293-.707l4-4A1 1 0 0 1 9 2h6c.265 0 .52.105.707.293l4 4A1 1 0 0 1 20 7ZM11 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm1.894 5.453a.998.998 0 0 0-1.788 0l-.966 1.931l-2.281.326a1.001 1.001 0 0 0-.566 1.697l1.636 1.636l-.315 1.893a1 1 0 0 0 .392.968a1 1 0 0 0 1.041.09L12 18.018l1.953.976a1 1 0 0 0 1.041-.09a1 1 0 0 0 .392-.968l-.315-1.893l1.636-1.636a1.001 1.001 0 0 0-.566-1.697l-2.281-.326Z");
}
</style><path class="t92bq76dl"/>`,
		"fallback": "coolicons:tag-star-fill",
	});
}

export default Component;
