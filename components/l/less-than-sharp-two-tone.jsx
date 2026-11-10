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
		"content": `<style>.xlgpvq4kj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.433 4.82L7 12L17.433 19.18");
}
</style><path class="xlgpvq4kj"/>`,
		"fallback": "keyline-icons:less-than-sharp-two-tone",
	});
}

export default Component;
