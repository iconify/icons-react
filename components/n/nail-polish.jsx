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

.j54qjsbwj {
  d: path("M9.25 16.5h5.5");
}

.oc8ukib0y {
  width: 11.5px;
  height: 9.5px;
  x: 6.25px;
  y: 11.75px;
  rx: 2.5px;
}

.xgpihqbae {
  width: 5px;
  height: 6.5px;
  x: 9.5px;
  y: 2.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="xgpihqbae"/><rect class="oc8ukib0y"/><path class="j54qjsbwj"/></g>`,
		"fallback": "iconoven:nail-polish",
	});
}

export default Component;
