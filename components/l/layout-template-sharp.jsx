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
		"content": `<style>.zxginw4pi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 13h8v7H4Zm12 0h4v7h-4ZM4 4h16v5H4Z");
}
</style><path class="zxginw4pi"/>`,
		"fallback": "coolicons:layout-template-sharp",
	});
}

export default Component;
