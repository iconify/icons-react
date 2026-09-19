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
		"content": `<style>.olflweb3g {
  fill: currentColor;
  d: path("M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2z");
}
</style><path class="olflweb3g"/>`,
		"fallback": "ic:sharp-imagesearch-roller",
	});
}

export default Component;
