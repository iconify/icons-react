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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qa92mwvyc {
  d: path("M4 20.25h11a.75.75 0 0 0 .75-.75c0-3-2.8-5.25-6.25-5.25S3.25 16.5 3.25 19.5a.75.75 0 0 0 .75.75M18.14 7.82l.62 1.37q.14.32.49.36l1.49.16q.35.04.09.27l-1.12 1.01q-.25.23-.18.58l.31 1.47q.07.34-.23.16l-1.31-.75q-.3-.17-.6 0l-1.31.75q-.3.18-.23-.16l.31-1.47q.07-.35-.18-.58l-1.12-1.01q-.26-.23.09-.27l1.49-.16q.35-.04.49-.36l.62-1.37q.14-.32.28 0");
}

.rknchmb5r {
  cx: 9.5px;
  cy: 7.75px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="rknchmb5r"/><path class="qa92mwvyc"/></g>`,
		"fallback": "iconoven:user-star",
	});
}

export default Component;
