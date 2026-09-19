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
		"content": `<style>.aya9hf04n {
  fill: currentColor;
  d: path("M5 4h14v2H5zm7 3l-7 7h4v6h6v-6h4zm1 5v6h-2v-6H9.83L12 9.83L14.17 12z");
}

.wojnxfy3j {
  fill: currentColor;
  d: path("M9.83 12H11v6h2v-6h1.17L12 9.83z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="wojnxfy3j"/><path class="aya9hf04n"/>`,
		"fallback": "ic:twotone-publish",
	});
}

export default Component;
