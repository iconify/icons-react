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
		"content": `<style>.digi55k0a {
  d: path("M7 12.75h2m2 0h2m2 0h2M7 16.5h2m6 0h2m-6 4.75V18h2v3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qm5vgmbgy {
  width: 16.5px;
  height: 11.5px;
  x: 3.75px;
  y: 9.75px;
  rx: 1.25px;
}

.sgqi5uicf {
  d: path("M10 5h4");
}

.uphblqwhn {
  width: 10px;
  height: 4.5px;
  x: 7px;
  y: 2.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="qm5vgmbgy"/><path class="digi55k0a"/><rect class="uphblqwhn"/><path class="sgqi5uicf"/></g>`,
		"fallback": "iconoven:penthouse",
	});
}

export default Component;
