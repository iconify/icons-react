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
		"content": `<style>.rn2hrcb8h {
  fill: currentColor;
  d: path("M18 14H6V8c0-1.1.9-2 2-2h2v5h8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.t3pdsjk6g {
  fill: currentColor;
  d: path("M18 9h-6V4H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22s5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2m-4 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4zM18 14H6V8c0-1.1.9-2 2-2h2v5h8z");
}
</style><path class="rn2hrcb8h"/><path class="t3pdsjk6g"/>`,
		"fallback": "ic:twotone-crib",
	});
}

export default Component;
