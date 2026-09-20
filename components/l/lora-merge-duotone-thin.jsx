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
		"content": `<style>.atxxk_b2f {
  fill: currentColor;
  d: path("M17.5 10.5a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dfxjcnksd {
  d: path("m16 10 -2 2 2 2");
}

.hdlchkb0j {
  d: path("M14.5 12H17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.itr6ywumz {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.udqwuzb_t {
  d: path("M17.5 10.5a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.w122ipbuy {
  d: path("M3 6a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="itr6ywumz"/><path class="atxxk_b2f"/><path class="w122ipbuy"/><path class="udqwuzb_t"/><path class="hdlchkb0j"/><path class="dfxjcnksd"/></g>`,
		"fallback": "iconmind:lora-merge-duotone-thin",
	});
}

export default Component;
