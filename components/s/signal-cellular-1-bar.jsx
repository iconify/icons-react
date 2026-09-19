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

.srjh0dbvs {
  fill: currentColor;
  d: path("M12 12L2 22h10z");
}
</style><path class="mnumfnbbo"/><path class="srjh0dbvs"/>`,
		"fallback": "ic:signal-cellular-1-bar",
	});
}

export default Component;
