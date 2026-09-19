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
		"content": `<style>.ewtooobix {
  fill: currentColor;
  d: path("m17.34 10.19l1.41-1.41l2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54l-1.41 1.41V1.71l-.7-.71l-3.54 3.54l.71.71h2.83l-1.41 1.41l1.06 1.06l-2.89 2.89l-4.13-4.13V5.06L4.83 2.04L2 4.87L5.03 7.9h1.41l4.13 4.13l-.85.85H7.6l-5.3 5.3a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15zm-7.98 5.15l-4.24 4.24l-.71-.71l4.24-4.24z");
}

.f68nsybhq {
  fill: currentColor;
  d: path("m21.67 18.17l-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41m-2.83 1.42l-4.24-4.24l.71-.71l4.24 4.24z");
}

.ojhp95_4n {
  fill: currentColor;
  d: path("m8.66 14.64l-4.25 4.24l.71.71l4.24-4.25zm5.936.705l.707-.707l4.242 4.243l-.707.707z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ojhp95_4n"/><path class="f68nsybhq"/><path class="ewtooobix"/>`,
		"fallback": "ic:twotone-handyman",
	});
}

export default Component;
