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
		"content": `<style>.ewvr9nuki {
  fill: currentColor;
  d: path("M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2z");
}

.q6cz72b_t {
  fill: currentColor;
  d: path("m10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71z");
}

.wbwbx43kg {
  fill: currentColor;
  d: path("M16.5 18h-11l2.75-3.53l1.96 2.36l2.75-3.54zM17 7h-3V6H4v14h14V10h-1z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="q6cz72b_t"/><path class="wbwbx43kg"/><path class="ewvr9nuki"/>`,
		"fallback": "ic:twotone-add-photo-alternate",
	});
}

export default Component;
