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
		"content": `<style>.hgsy0ccso {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 13L19 2L5 2L5 22L10 22M14.5 6L9.5 6M16 23L16 16M19.2929 19.2929L16 16L12.7071 19.2929");
}
</style><path class="hgsy0ccso"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-up-sharp",
	});
}

export default Component;
