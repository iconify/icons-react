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
		"content": `<style>.kppzuab5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 21V8l8-4l8 4v13zm8-12l3.464 6H8.536Zm0 8l3.464-6H8.536Z");
}
</style><path class="kppzuab5j"/>`,
		"fallback": "coolicons:synagogue-sharp",
	});
}

export default Component;
