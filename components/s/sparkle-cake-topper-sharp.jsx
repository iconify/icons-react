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
		"content": `<style>.eh0skacav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.14 3.32l1.1 2.46l.14.32l.35.04l2.68.28l.35.03l-.26.24l-2.01 1.8l-.26.24l.08.34l.56 2.63l.07.35l-.3-.18l-2.34-1.35l-.3-.17l-.3.17l-2.34 1.35l-.3.18l.07-.35l.56-2.63l.08-.34l-.26-.24l-2.01-1.8l-.26-.24l.35-.03l2.68-.28l.35-.04l.14-.32l1.1-2.46L12 3zM12 13v5.5m-8.5 0h17v2.75h-17zM4 6.25h2.5M5.25 5v2.5m12.25 5H20m-1.25-1.25v2.5");
}
</style><path class="eh0skacav"/>`,
		"fallback": "iconoven:sparkle-cake-topper-sharp",
	});
}

export default Component;
