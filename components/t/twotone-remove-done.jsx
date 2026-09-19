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
		"content": `<style>.kmvw8i9yi {
  fill: currentColor;
  d: path("M4.84 1.98L3.43 3.39l10.38 10.38l-1.41 1.41l-4.24-4.24l-1.41 1.41l5.66 5.66l2.83-2.83l6.6 6.6l1.41-1.41zm13.21 10.38L23 7.4L21.57 6l-4.94 4.94zm-.71-4.96l-1.41-1.41l-2.12 2.12l1.41 1.41zM1.08 12.35l5.66 5.66l1.41-1.41l-5.66-5.66z");
}
</style><path class="kmvw8i9yi"/>`,
		"fallback": "ic:twotone-remove-done",
	});
}

export default Component;
