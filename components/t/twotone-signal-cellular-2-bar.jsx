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
		"content": `<style>.mnumfnbbo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M2 22h20V2z");
}

.vfica3t-a {
  fill: currentColor;
  d: path("M14 10L2 22h12z");
}
</style><path class="mnumfnbbo"/><path class="vfica3t-a"/>`,
		"fallback": "ic:twotone-signal-cellular-2-bar",
	});
}

export default Component;
