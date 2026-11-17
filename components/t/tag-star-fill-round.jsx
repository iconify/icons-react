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
		"content": `<style>.oz7aq45un {
  fill: currentColor;
  d: path("M20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8c0-1.039.578-1.992 1.293-2.707l2-2C8.008 2.578 8.961 2 10 2h4c1.039 0 1.992.578 2.707 1.293l2 2C19.422 6.008 20 6.961 20 8ZM11 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm1.894 5.453a.998.998 0 0 0-1.788 0l-.966 1.931l-2.281.326a1.001 1.001 0 0 0-.566 1.697l1.636 1.636l-.315 1.893a1 1 0 0 0 .392.968a1 1 0 0 0 1.041.09L12 18.018l1.953.976a1 1 0 0 0 1.041-.09a1 1 0 0 0 .392-.968l-.315-1.893l1.636-1.636a1.001 1.001 0 0 0-.566-1.697l-2.281-.326Z");
}
</style><path class="oz7aq45un"/>`,
		"fallback": "coolicons:tag-star-fill-round",
	});
}

export default Component;
