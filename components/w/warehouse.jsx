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
		"content": `<style>.ehe2hlduo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M5 21V11c0-.613.774-1.387 2-2l4-2h2l4 2c1.226.613 2 1.387 2 2v10M9 21v-8h6v8m-6-4h6");
}
</style><path class="ehe2hlduo"/>`,
		"fallback": "coolicons:warehouse",
	});
}

export default Component;
