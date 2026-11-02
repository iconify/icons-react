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
		"content": `<style>.cjvooib1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 5h6m-5 0v14m4-14v14M11 5a4 4 0 1 0 0 8h1");
}
</style><path class="cjvooib1l"/>`,
		"fallback": "coolicons:paragraph-duotone-round",
	});
}

export default Component;
