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
		"content": `<style>.b47299ewv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 10L8 10L10 2L15 2L16 10L22 10L17.5 22L2 22ZM8 10L8 22");
}
</style><path class="b47299ewv"/>`,
		"fallback": "keyline-icons:thumbs-up-sharp",
	});
}

export default Component;
