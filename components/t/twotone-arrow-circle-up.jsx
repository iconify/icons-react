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
		"content": `<style>.bw-73pdem {
  fill: currentColor;
  d: path("M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-8v4h2v-4h3l-4-4l-4 4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.v4ev5gbkq {
  fill: currentColor;
  d: path("M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4l-4 4z");
}
</style><path class="bw-73pdem"/><path class="v4ev5gbkq"/>`,
		"fallback": "ic:twotone-arrow-circle-up",
	});
}

export default Component;
