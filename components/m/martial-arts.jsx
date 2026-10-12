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
		"content": `<style>.herm-9low {
  width: 5px;
  height: 7.5px;
  x: 9.5px;
  y: 5.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oq4suybss {
  width: 6.75px;
  height: 4.25px;
  x: 2.75px;
  y: 7.5px;
  rx: 1.25px;
}

.txmftw0an {
  width: 6.75px;
  height: 4.25px;
  x: 14.5px;
  y: 7.5px;
  rx: 1.25px;
}

.zg1pq-bli {
  d: path("M9.5 14.75h.5q.75 0 .5.71l-1.75 4.83q-.25.71-.98.55l-.79-.18q-.73-.16-.43-.85l1.9-4.37q.3-.69 1.05-.69m4.5 0h.5q.75 0 1.05.69l1.9 4.37q.3.69-.43.85l-.79.18q-.73.16-.98-.55l-1.75-4.83q-.25-.71.5-.71");
}
</style><g class="hntgybcog"><rect class="oq4suybss"/><rect class="txmftw0an"/><rect class="herm-9low"/><path class="zg1pq-bli"/></g>`,
		"fallback": "iconoven:martial-arts",
	});
}

export default Component;
