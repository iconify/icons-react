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
		"content": `<style>.eq8p65fcb {
  d: path("M4 4v16h16V4Z");
}

.f7_9udqlo {
  fill: currentColor;
  d: path("M6 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.nizbrguot {
  fill: currentColor;
  d: path("M6 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ns-291-6d {
  d: path("m15 8 3 3 -3 3");
}

.of_dlbc-j {
  d: path("M6 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.x4bmljlar {
  d: path("M6 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.xu3q-b_rm {
  fill: currentColor;
  d: path("M4 4v16h16V4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xu3q-b_rm"/><path class="nizbrguot"/><path class="f7_9udqlo"/><path class="eq8p65fcb"/><path class="r7xk8o29f"/><path class="of_dlbc-j"/><path class="ns-291-6d"/><path class="x4bmljlar"/></g>`,
		"fallback": "iconmind:model-building-duotone-thin",
	});
}

export default Component;
