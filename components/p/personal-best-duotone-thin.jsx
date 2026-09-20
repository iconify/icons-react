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
		"content": `<style>.bdehoybwy {
  d: path("M8 8.5a2.5 2.5 0 0 1 0 -5");
}

.bx6cs-b9q {
  d: path("M16 3.5a2.5 2.5 0 0 1 0 5");
}

.gmozx1btc {
  fill: currentColor;
  d: path("M8 3h8v6l-4 4 -4 -4Z");
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

.lkivjibuo {
  d: path("M12 13v7");
}

.o8p9igehf {
  d: path("M8 3h8v6l-4 4 -4 -4Z");
}

.qdn88l2uv {
  d: path("M7 20h10");
}
</style><g class="hntgybcog"><path class="gmozx1btc"/><path class="o8p9igehf"/><path class="lkivjibuo"/><path class="qdn88l2uv"/><path class="bdehoybwy"/><path class="bx6cs-b9q"/></g>`,
		"fallback": "iconmind:personal-best-duotone-thin",
	});
}

export default Component;
