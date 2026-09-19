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
		"content": `<style>.iqccs38dr {
  fill: currentColor;
  d: path("M7 11h10v2H7z");
}

.t8730ebtl {
  fill: currentColor;
  d: path("M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m5 9H7v-2h10z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zsfw75g9a {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8");
}
</style><path class="t8730ebtl"/><path class="iqccs38dr"/><path class="zsfw75g9a"/>`,
		"fallback": "ic:twotone-do-not-disturb-on",
	});
}

export default Component;
