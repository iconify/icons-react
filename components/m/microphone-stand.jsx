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
		"content": `<style>.a8u166caj {
  width: 5px;
  height: 7.5px;
  x: 9.5px;
  y: 2.75px;
  rx: 2.5px;
}

.di9aaqbdm {
  d: path("M12 10.25v8.5m0 0l-5 2.5m5-2.5l5 2.5m-5-2.5v2.5M9.75 13h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="a8u166caj"/><path class="di9aaqbdm"/></g>`,
		"fallback": "iconoven:microphone-stand",
	});
}

export default Component;
