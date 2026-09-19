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
		"content": `<style>.jxyjxbnqt {
  fill: currentColor;
  d: path("M8 7h11v14H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.wua95abon {
  fill: currentColor;
  d: path("M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z");
}
</style><path class="jxyjxbnqt"/><path class="wua95abon"/>`,
		"fallback": "ic:twotone-content-copy",
	});
}

export default Component;
