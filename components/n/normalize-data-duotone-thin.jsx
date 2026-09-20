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
		"content": `<style>.bt_2bvgpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ck7sgubpk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.k7cz9qivc {
  d: path("M18 11v5");
}

.kavs8h2ql {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m5687cbde {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 11v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o759xmblc {
  d: path("M6 8v8");
}

.qcol0s9_v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.wew0vnk_n {
  d: path("M12 5v14");
}
</style><g class="hntgybcog"><path class="ck7sgubpk"/><path class="bt_2bvgpa"/><path class="qcol0s9_v"/><path class="kavs8h2ql"/><path class="m5687cbde"/><path class="k6nj2fbya"/><path class="rkhcgsbdl"/><path class="o759xmblc"/><path class="wew0vnk_n"/><path class="k7cz9qivc"/></g>`,
		"fallback": "iconmind:normalize-data-duotone-thin",
	});
}

export default Component;
