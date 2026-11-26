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
		"content": `<style>.o79-wh48r {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.3929 10.9073L12 3L7.6071 10.9073M6.3929 13.0927L2 21L10.75 21M13.25 21L22 21L17.6071 13.0927");
}
</style><path class="o79-wh48r"/>`,
		"fallback": "keyline-icons:triangle-dashed-sharp-two-tone",
	});
}

export default Component;
