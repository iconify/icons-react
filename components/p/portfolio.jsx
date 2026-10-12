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

.hrwqdnb5i {
  d: path("M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7");
}

.ukvmc8bfw {
  cx: 12px;
  cy: 14px;
  r: 4px;
}

.zhjydmbjk {
  width: 18px;
  height: 14px;
  x: 3px;
  y: 7px;
  rx: 2.5px;
}

.ziql97jnu {
  d: path("M12 10v4h4");
}
</style><g class="hntgybcog"><path class="hrwqdnb5i"/><rect class="zhjydmbjk"/><circle class="ukvmc8bfw"/><path class="ziql97jnu"/></g>`,
		"fallback": "iconoven:portfolio",
	});
}

export default Component;
