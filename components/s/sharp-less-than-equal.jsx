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
		"content": `<style>.gyj9v_mhe {
  fill: currentColor;
  d: path("M18 20.998H6v-2h12z");
}

.q01z8wb7w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 15.5L9.25 10l8.25-5.5l-1-1.5L6 10l10.5 7z");
}
</style><path class="q01z8wb7w"/><path class="gyj9v_mhe"/>`,
		"fallback": "ic:sharp-less-than-equal",
	});
}

export default Component;
