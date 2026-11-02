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
		"content": `<style>.n8gg2pb-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h8m-8 4h8m-8 4h8m-8 4h8M8 8l-4 4l4 4");
}
</style><path class="n8gg2pb-t"/>`,
		"fallback": "coolicons:outdent-duotone-round",
	});
}

export default Component;
