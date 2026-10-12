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
		"content": `<style>.huut1ubbh {
  d: path("m11.3 3.05l.7-.262l.7.262l5.25 2l1.284.48l.016 1.37v4.35c0 4.75-3.1 8.4-7.25 10c-4.15-1.6-7.25-5.25-7.25-10V6.9l.016-1.37l1.284-.48Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgan6978u {
  d: path("m12.14 7.82l.75 1.69l.14.32l.35.03l1.84.19l.35.04l-.26.24l-1.38 1.23l-.26.23l.08.35l.38 1.8l.07.34l-.3-.17l-1.6-.92l-.3-.18l-.3.18l-1.6.92l-.3.17l.07-.34l.38-1.8l.08-.35l-.26-.23l-1.38-1.23l-.26-.24l.35-.04l1.84-.19l.35-.03l.14-.32l.75-1.69l.14-.32z");
}
</style><g class="x2cwu0gfd"><path class="huut1ubbh"/><path class="zgan6978u"/></g>`,
		"fallback": "iconoven:moderator-shield-sharp",
	});
}

export default Component;
