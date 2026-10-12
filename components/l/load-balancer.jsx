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
		"content": `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.fxwnb7vgp {
  cx: 5px;
  cy: 19px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sn3pd3b2c {
  d: path("M12 6.75V12m-7 5v-5h14v5m-7-5v5");
}

.xtsrmvj7o {
  cx: 19px;
  cy: 19px;
  r: 2px;
}

.zopjch_2q {
  cx: 12px;
  cy: 19px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="e9-7-8-2z"/><path class="sn3pd3b2c"/><circle class="fxwnb7vgp"/><circle class="zopjch_2q"/><circle class="xtsrmvj7o"/></g>`,
		"fallback": "iconoven:load-balancer",
	});
}

export default Component;
