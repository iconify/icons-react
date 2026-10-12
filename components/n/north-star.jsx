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
		"content": `<style>.fsxv44btx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.16 3.33l1.68 6.09q.16.58.72.79l4.13 1.58q.56.21 0 .42l-4.13 1.58q-.56.21-.72.79l-1.68 6.09q-.16.58-.32 0l-1.68-6.09q-.16-.58-.72-.79l-4.13-1.58q-.56-.21 0-.42l4.13-1.58q.56-.21.72-.79l1.68-6.09q.16-.58.32 0M16 8l1.5-1.5M8 8L6.5 6.5M16 16l1.5 1.5M8 16l-1.5 1.5");
}
</style><path class="fsxv44btx"/>`,
		"fallback": "iconoven:north-star",
	});
}

export default Component;
