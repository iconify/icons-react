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
		"content": `<style>.fpu-yjb3n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4.25C11.5556 3.6875 10.1333 2 8 2L7 2M12 4.25C12.4444 3.6875 13.8667 2 16 2L17 2M12 4.25L12 19.75M12 19.75C12.4444 20.3125 13.8667 22 16 22L17 22M12 19.75C11.5556 20.3125 10.1333 22 8 22L7 22");
}
</style><path class="fpu-yjb3n"/>`,
		"fallback": "keyline-icons:text-cursor-sharp",
	});
}

export default Component;
