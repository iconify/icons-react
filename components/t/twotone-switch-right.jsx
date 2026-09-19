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
		"content": `<style>.ea61t7v1f {
  fill: currentColor;
  d: path("M15.5 15.38V8.62L18.88 12zM14 19l7-7l-7-7zm-4 0V5l-7 7z");
}

.m6v_9ye9x {
  fill: currentColor;
  d: path("M15.5 15.38V8.62L18.88 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="m6v_9ye9x"/><path class="ea61t7v1f"/>`,
		"fallback": "ic:twotone-switch-right",
	});
}

export default Component;
