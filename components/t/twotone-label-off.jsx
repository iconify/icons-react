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
		"content": `<style>.p-xdkacuj {
  fill: currentColor;
  d: path("m16 7l3.55 5l-1.63 2.29l1.43 1.43L22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5l-7.37.01l2 1.99zM2 4.03l1.58 1.58C3.22 5.96 3 6.46 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.28 0 .55-.07.79-.18L18.97 21l1.41-1.41L3.41 2.62zm3 3L14.97 17H5z");
}

.s8kv3ac8b {
  fill: currentColor;
  d: path("M5 7.03V17h9.97zM16 7h-5.37l7.29 7.29L19.55 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="s8kv3ac8b"/><path class="p-xdkacuj"/>`,
		"fallback": "ic:twotone-label-off",
	});
}

export default Component;
