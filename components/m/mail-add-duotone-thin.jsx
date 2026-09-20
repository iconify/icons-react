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
		"content": `<style>.adpm_c_dx {
  fill: currentColor;
  d: path("M3 11.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2V20a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.im9sid5gw {
  d: path("m5 9.5 7 -7 7 7");
}

.la-twzbff {
  d: path("M12 12.5v6");
}

.vizlgibdt {
  d: path("M3 11.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2V20a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="hntgybcog"><path class="adpm_c_dx"/><path class="vizlgibdt"/><path class="im9sid5gw"/><path class="la-twzbff"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:mail-add-duotone-thin",
	});
}

export default Component;
