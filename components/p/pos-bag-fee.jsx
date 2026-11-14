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
		"content": `<style>.ah55kfbgu {
  d: path("M19.25 16.75C19 16.25 18.6 16 18 16c-.7 0-1.25.4-1.25 1c0 1.25 2.5.75 2.5 2c0 .6-.55 1-1.25 1c-.6 0-1-.25-1.25-.75");
}

.gqiywdc9s {
  d: path("M12.415 21.5H4v-13L5.5 3h3v4.5c1 1.5 6 1.5 7 0V3h3L20 8.5v3.285M4 13h9.8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kq2eg_b6x {
  d: path("M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="gqiywdc9s"/><path class="kq2eg_b6x"/><path class="ah55kfbgu"/></g>`,
		"fallback": "uix:pos-bag-fee",
	});
}

export default Component;
