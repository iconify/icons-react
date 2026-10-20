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
		"content": `<style>.h12o89jtc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.4416 4.9724L6.9117 5.8205C6.3159 6.774 6 7.8757 6 9C6 12.3137 8.6863 15 12 15C15.3137 15 18 12.3137 18 9C18 5.6863 15.3137 3 12 3L12 22");
}
</style><path class="h12o89jtc"/>`,
		"fallback": "keyline-icons:phi-sharp-two-tone",
	});
}

export default Component;
