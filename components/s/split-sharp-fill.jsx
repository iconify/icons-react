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
		"content": `<style>.vs5n11bss {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22L12 13L6 13L6 3M12 13L18 13L18 3M2.7071 6.2929L6 3L9.2929 6.2929M14.7071 6.2929L18 3L21.2929 6.2929");
}
</style><path class="vs5n11bss"/>`,
		"fallback": "keyline-icons:split-sharp-fill",
	});
}

export default Component;
