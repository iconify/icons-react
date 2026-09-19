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
		"content": `<style>.e2wi1abax {
  fill: currentColor;
  d: path("M14 4h-4v5c0 1.1-.35 2.14-1 3h6c-.63-.84-1-1.88-1-3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.qjt5hmeqh {
  fill: currentColor;
  d: path("M19 12c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1l1-1v-7H19zM9 12c.65-.86 1-1.9 1-3V4h4v5c0 1.12.37 2.16 1 3z");
}
</style><path class="e2wi1abax"/><path class="qjt5hmeqh"/>`,
		"fallback": "ic:twotone-push-pin",
	});
}

export default Component;
