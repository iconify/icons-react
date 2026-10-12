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
		"content": `<style>.cb1nrybur {
  width: 12.5px;
  height: 12.25px;
  x: 5.75px;
  y: 9px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ij8bw_4gc {
  width: 14.5px;
  height: 3.75px;
  x: 4.75px;
  y: 2.75px;
  rx: 1.5px;
}

.y_2qowbrf {
  d: path("M12 12.25v5.5M9.25 15h5.5");
}
</style><g class="hntgybcog"><rect class="cb1nrybur"/><rect class="ij8bw_4gc"/><path class="y_2qowbrf"/></g>`,
		"fallback": "iconoven:pill-bottle",
	});
}

export default Component;
