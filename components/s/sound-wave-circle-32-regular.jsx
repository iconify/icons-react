import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v8ahmbago {
  fill: currentColor;
  d: path("M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12s12-5.373 12-12S22.627 4 16 4M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m11.5-6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1m10 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0zM18 12.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M10 14a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z");
}
</style><path class="v8ahmbago"/>`,
		"fallback": "fluent:sound-wave-circle-32-regular",
	});
}

export default Component;
