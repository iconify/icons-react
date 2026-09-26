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
		"content": `<style>.l66sj53zl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4L3 4L3 22L21 22L21 4L18 4M3 13L21 13M8.7071 1.7071L15.2929 8.2929M15.2929 1.7071L8.7071 8.2929");
}
</style><path class="l66sj53zl"/>`,
		"fallback": "keyline-icons:table-rows-remove-above-sharp",
	});
}

export default Component;
