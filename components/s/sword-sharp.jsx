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
		"content": `<style>.c0yewh3tu {
  cx: 4px;
  cy: 20px;
  r: 1.25px;
}

.chr7jtb0w {
  d: path("m10.59 11.65l6.91-6.91l.35-.35l.47-.18l1.96-.78l.47-.18l-.18.47l-.78 1.96l-.18.47l-.35.35l-6.91 6.91l-.35.35l-.35-.35l-1.06-1.06l-.35-.35zm-4.34.6l5.5 5.5m-3.5-2l-3 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="chr7jtb0w"/><circle class="c0yewh3tu"/></g>`,
		"fallback": "iconoven:sword-sharp",
	});
}

export default Component;
